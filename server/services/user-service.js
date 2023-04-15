const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailservice = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dtos')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password, name, status,) {
        const isUnique = await UserModel.findOne({ email })
        if (isUnique) {
            throw ApiError.BadRequest('User already exist')
        }
        const hashPass = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({ email: email, password: hashPass, name: name, status: status, activationLink: activationLink })
        await mailservice.sendActivationMail(email, `${process.env.API_URL}/api/activation/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async activation(activationLink) {
        const user = await UserModel.findOne({ activationLink })
        // console.log(user)
        if (!user) {
            throw ApiError.BadRequest('Shiit мэнчик, cringe')
        }
        user.activated = true
        await user.save()
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest('User not found')
        }
        const checkPass = await bcrypt.compare(password, user.password)
        if (!checkPass) {
            throw ApiError.BadRequest('Password not match')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        console.log("grgrg")
        if (!refreshToken) {
            throw ApiError.UnathorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw ApiError.UnathorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }
    }

    async getUsers() {
        const users = await UserModel.find()
        return users
    }

    async updUser(refreshToken, name, status, imagePath) {
        const user = tokenService.validateRefreshToken(refreshToken)
        const userData = await UserModel.updateOne({ user: user._id }, { name: name, status: status, img: imagePath })
        const userDto = new UserDto(userData)
        return userDto
    }

}

module.exports = new UserService()