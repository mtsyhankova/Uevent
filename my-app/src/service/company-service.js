import $api from '../http/index'

export default class CompanyService {
    static async getCom(id) {
        return $api.get(`/getCo/${id}`)
    }
}