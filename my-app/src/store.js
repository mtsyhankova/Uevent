import { makeAutoObservable } from 'mobx'
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
}