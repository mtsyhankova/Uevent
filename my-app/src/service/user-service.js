import $api from '../http/index'

export default class UserService {
    static async update(formData) {
        console.log('-------------------')
        console.log(formData.get('name'))
        return $api.post('/updUser', formData, {
            header: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
    static async updateImg(img) {
        return $api.post('/updUserImg', { img })
    }

    // static async registration(email, password) {
    //     return $api.post('/registration', { email, password })
    // }

    // static async logout() {
    //     return $api.post('/logout')
    // }
}