module.exports = class UserDto {
    email;
    id;
    isActivated;
    name;
    status

    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.activated = model.activated
        this.status = model.status
        this.name = model.name
    }
}