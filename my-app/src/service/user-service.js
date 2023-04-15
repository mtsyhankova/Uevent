import $api from '../http/index'

export default class UserService {
    static async update(img, name, status) {
        return $api.post('/updUser', { img, name, status })
    }

    // static async registration(email, password) {
    //     return $api.post('/registration', { email, password })
    // }

    // static async logout() {
    //     return $api.post('/logout')
    // }
}