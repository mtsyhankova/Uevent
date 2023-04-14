const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {type: String, unique: true, required:true},
    password: {type: String, unique: false, required:true},
    name: {type: String, unique: true, default: "User #1"},
    status: {type: String, unique: false},
    img: {type: String, default: "../../../asssets/Company/luffy.jpg"},
    activated: {type: Boolean, default: false, required: true},
    activationLink: {type: String, required: false}
})

module.exports = model('User', UserSchema);