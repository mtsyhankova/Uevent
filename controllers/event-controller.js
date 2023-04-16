const ApiError = require('../exceptions/api-error')
const tokenService = require('../services/token-service')
const eventDtos = require('../dtos/event-dtos')

/*
    name: {type: String, unique: false, default: "User #1"},
    description: {type: String, unique: false},
    dateStart:{type: Date},
    dateEnd: {type: Date},
    city: {type: String},
    location: {type: String},
    img: [{type: String}],
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    coments: [{type: String}]
*/
class UserController {
    async createEvent(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const {name, description, dateStart, dateEnd, city, location, img} = req.body
            const eventData = await function(refreshToken, name, description, dateStart, dateEnd, city, location, img) {}
            const eventDto = new eventDtos(eventData)
            return res.json(eventDto)
        } catch (e) {
            next(e)
        }
    }

    async deleteEvent(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const {id} = req.body
            const eventData = await function(refreshToken, id) {}
            const eventDto = new eventDtos(eventData)
            return res.json(eventDto)
        } catch (e) {
            next(e)
        }
    }

    async editEvent(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const {name, description, dateStart, dateEnd, city, location, img} = req.body
            const eventData = await function(refreshToken, name, description, dateStart,dateEnd,city, location, img){}
            const eventDto = new eventDtos(eventData)
            return res.json(eventDto)
        } catch (e) {
            next(e)
        }
    }

    async getEvent(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const {id} = req.body
            const event = await function(refreshToken, id) {}
            const eventDto = new eventDtos(event)
            return res.json(eventDto)
        } catch (e) {
            next(e)
        }
    }

    async getMembers(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const {id} = req.body
            const eventMembers = await function(refreshToken, id){}
            return res.json(eventMembers)
        } catch (e) {
            next(e)
        }
    }

    async buyTicket(req, res, next) {
        try {
            
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()