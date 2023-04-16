const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailservice = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dtos')
const ApiError = require('../exceptions/api-error')
const tokenModel = require('../models/token-model')

class UserService {
    async registration(email, password, name, status,) {
        const isUnique = await UserModel.findOne({email})
        if(isUnique){
            throw ApiError.BadRequest('User already exist')
        }
        const hashPass = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email: email, password: hashPass, name: name, status:status, activationLink: activationLink})
        await mailservice.sendActivationMail(email, `${process.env.API_URL}/api/activation/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto }
    }

    async activation(activationLink){
        const user = await UserModel.findOne({activationLink})
        // console.log(user)
        if(!user) {
            throw ApiError.BadRequest('Shiit мэнчик, cringe')
        }
        user.activated = true
        await user.save()
    }

    async login(email, password){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('User not found')
        }
        const checkPass = await bcrypt.compare(password, user.password)
        if(!checkPass){
            throw ApiError.BadRequest('Password not match')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return{...tokens, user: userDto}
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnathorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDB){
            throw ApiError.UnathorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return{...tokens, user: userDto}
    }
    
    async getUsers() {
        const users = await UserModel.find()
        return users
    }

    async updUser(req, res, next) {
        try {
            console.log(req.files)
            const { refreshToken } = req.cookies
            const user = tokenModel.validateRefreshToken(refreshToken)
            console.log(req.body)
            const formData = req.body
            console.log('form data', formData.file)
            const imageName = req.files.fieldname
            const basePath = `${req.protocol}://${req.get('host')}/public/upload/${imageName}`
            // console.log(refreshToken)
            const userData = await UserModel.updateOne({_id: user.id}, {name: formData.name, status: formData.status, img: basePath})
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }

}

module.exports = new UserService()