const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {type: String, unique: true, required:true},
    password: {type: String, unique: false, required:true},
    name: {type: String, unique: true},
    status: {type: String, unique: false},
    img: {type: String},
    activated: {type: Boolean, default: false, required: true},
    activationLink: {type: String, required: false}
})

module.exports = model('User', UserSchema);