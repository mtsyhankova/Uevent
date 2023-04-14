module.exports = class UserDto {
    email;
    id;
    isActivated;
    login;
    status

    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.activated = model.activated
        this.status = model.status
        this.login = model.login
    }
}