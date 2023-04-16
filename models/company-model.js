const {Schema, model} = require('mongoose');
const userModel = require('./user-model');

const CompanySchema = new Schema({
    name: {type: String, unique: false, default: "Your Co."},
    description: {type: String, unique: false, default: "Simple Co."},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    img: {type: String, default: `http//localhost:3000/public/upload/defaultImg.jpeg`},
})

module.exports = model('Company', CompanySchema);