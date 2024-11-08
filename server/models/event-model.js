const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: { type: String, unique: false, default: "User #1" },
    description: { type: String, unique: false },
    dateStart: { type: Date },
    dateEnd: { type: Date },
    city: { type: String },
    location: { type: String },
    img: [{ type: String }],
    owner: { type: Schema.Types.ObjectId, ref: 'Company' },
    members: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    coments: [{ type: Schema.Types.ObjectId, ref: 'Coment' }]
})

module.exports = model('User', UserSchema);