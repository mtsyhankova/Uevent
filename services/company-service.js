const companyModel = require('../models/company-model')
const tokenService = require('./token-service')
const tokenModel = require('../models/token-model')
const companyDtos = require('../dtos/company-dtos')

class UserService {
    async createCompany(refreshToken, name, description, logo) {
        if(await companyModel.findOn({name: name})) return {}
        const user = tokenService.validateRefreshToken(refreshToken)
        const companyData = await companyModel.create({name: name, description: description, owner: user.id, logo: logo})
        return companyData
    }

    async deleteCompany(refreshToken, id){
        const user = tokenService.validateRefreshToken(refreshToken)
        if(await companyModel.findById(id).owner != user.id) throw new console.error('U dont have access rights');
        const empty = await companyModel.deleteOne({_id: id})
        return empty
    }

    async editCompany(refreshToken, data){
        const user = tokenModel.validateRefreshToken(refreshToken)
        if(user.id != id) throw new console.error("refused")
        const co = await companyModel.find({owner: user.id})
        if(data.name) co.name = data.name
        if(data.description) co.description = data.description
        if(data.logo) co.logo = data.logo
        await co.save()
        return await companyModel.find({owner: user.id})
    }

    async getCompany(refreshToken, id){
        const user = tokenModel.validateRefreshToken(refreshToken)
        if(user.id != id) throw new console.error("refused")
        const coData = await companyModel.findById(id)
        return coData
    }
}