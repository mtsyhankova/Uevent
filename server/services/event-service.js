const UserModel = require('../models/user-model')
const mailservice = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dtos')
const ApiError = require('../exceptions/api-error')
const companyModel = require('../models/company-model')
const tokenModel = require('../models/token-model')
const eventModel = require('../models/event-model')
const memberModel = require('../models/member-model')
const comentModel = require('../models/coments-model')
const eventDtos = require('../dtos/event-dtos')

class EventService {
    async createEvent(refreshToken, name, description, dateStart, dateEnd, city, location, img) {
        const user = tokenService.validateRefreshToken(refreshToken)
        const owner = companyModel.findOne({ owner: user.id })
        if (!owner) throw ApiError.BadRequest('You are not company owner')
        const event = eventModel.create({ name: name, description: description, dateStart: dateStart, dateEnd: dateEnd, city: city, location: location, img: img, owner: owner.id })
        const eventDto = new eventDtos(event)
        return eventDto
    }

    async deleteOne(refreshToken, id) {
        const user = tokenService.validateRefreshToken(refreshToken)
        if (await eventModel.findOne({ _id: id }) != await companyModel.findOne({ owner: user.id })) throw new ApiError('You dont have access rights')
        const empty = await eventModel.deleteOne({ _id: id })
        return empty
    }

    async login(email, password) {

    }

    async getEvent(refreshToken, id) {
        const event = eventModel.findOne({ _id: id })
        const eventDto = new eventDtos(event)
        return eventDto
    }

    async getAllMembers(refreshToken, id) {
        // const allMembers = 
    }

    async getUsers() {
        const users = await UserModel.find()
        return users
    }

    async updUser(req, res, next) {


    }

}

module.exports = new UserService()