import { makeAutoObservable } from 'mobx'
import axios from 'axios';
import { API_URL } from './http';
import AuthService from './service/auth_service';
import UserService from './service/user-service';

export default class Store {
    user = { id: '', email: '', name: '', img: '', status: '', activated: false }
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(activated, email, id, img, name, status) {
        this.user.id = id
        this.user.email = email
        this.user.name = name
        this.user.img = img
        this.user.status = status
        this.user.activated = activated
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async checkAuth() {
        this.setLoading(true)

        try {

            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(
                response.data.user.activated, response.data.user.email,
                response.data.user.id, response.data.user.img,
                response.data.user.name, response.data.user.status)
        } catch (e) {

        } finally {
            this.setLoading(false)
        }
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(
                response.data.user.activated, response.data.user.email,
                response.data.user.id, response.data.user.img,
                response.data.user.name, response.data.user.status)
            // let userInfo = JSON.parse(JSON.stringify(store.user)) так надо достовать данніе о юзере со стора глобалього
            return (true)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(
                response.data.user.activated, response.data.user.email,
                response.data.user.id, response.data.user.img,
                response.data.user.name, response.data.user.status)
            return (true)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            localStorage.setItem('active_cals', '')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    /////////////////////////////////////////////////USER///////////////////////////////////////////
    async updateUser(files, name, status) {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('nameImg', files.name)
            formData.append('status', status)
            formData.append('avatar', files)
            const response = await UserService.update(formData)
            this.setUser(
                response.data.isActivated, response.data.email,
                response.data.id, response.data.img,
                response.data.name, response.data.status)

            return (true)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }
}