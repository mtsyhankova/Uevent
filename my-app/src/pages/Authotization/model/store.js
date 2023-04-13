import AuthService from '../../../service/auth_service';

async function login(email, password) {
    try {
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        // console.log(response)
        this.setAuth(true)
        this.setUser(response.data.user.email, response.data.user.id, response.data.user.activated)
    } catch (e) {
        console.log(e.response?.data?.message)
        return (e)
    }
}
export { login }