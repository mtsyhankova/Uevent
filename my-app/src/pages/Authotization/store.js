import AuthService from '../../service/auth_service';

async function login(email, password, store) {

    try {
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        store.setAuth(true)
        store.setUser(response.data.user.activated, response.data.user.email,
            response.data.user.id, response.data.user.img,
            response.data.user.name)
        // let userInfo = JSON.parse(JSON.stringify(store.user)) так надо достовать данніе о юзере со стора глобалього
        // console.log(store.user)
        return (true)
    } catch (e) {
        console.log(e.response?.data?.message)
        return (e)
    }

}
export { login }