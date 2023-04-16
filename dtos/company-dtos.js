module.exports = class UserDto {
    email;
    id;
    isActivated;
    name;
    img;
    status

    constructor(model) {
        this.id = model._id
        this.name = model.name
        this.description = model.description
        this.owner = model.owner
        this.logo = model.logo
    }
}