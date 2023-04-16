const companyService = require('../services/company-service')
const ApiError = require('../exceptions/api-error')
const tokenService = require('../services/token-service')
const companyDtos = require('../dtos/company-dtos')

class CompanyController{
    async createCompany(req, res, next){
        try{
            const {refreshToken} = req.cookies
            const {name, title} = req.body
            const logo = req.file.fieldname

            const coData = await companyService.createCompany(refreshToken, name, title, logo)
            const coDtos = new companyDtos(coData)
            return res.json(coDtos)
        } catch(e){
            console.log(e)
        }
    }

    async deleteCompany(req, res, next){
        try{
            const {refreshToken} = req.cookies
            const {id} = req.body
            const coData = await companyService.deleteCompany(refreshToken, id) 
            const coDtos = new companyDtos(coData)
            return res.json({})
        } catch(e){
            console.log(e)
        }
    }

    async editCompany(req, res, next){
        try{
            const {refreshToken} = req.cookies
            // const {name, title} = req.body
            // const logo = req.file.fieldname
            const coData = await companyService.editCompany(refreshToken, req.body)
            const coDtos = new companyDtos(coData)
            return res.json(coDtos)
        } catch(e){
            console.log(e)
        }
    }

    async getCompany(req, res, next){
        try{
            const {refreshToken} = req.cookies
            const {id} = req.body
            const coData = await companyService.getCompany(refreshToken, id)
            const coDtos = new companyDtos(coData)
            return res.json(coDtos)
        } catch(e){
            console.log(e)
        }
    }
}

module.exports = new CompanyController()