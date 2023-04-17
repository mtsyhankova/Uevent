/*
    name: {type: String, unique: false, default: "User #1"},
    description: {type: String, unique: false},
    dateStart:{type: Date},
    dateEnd: {type: Date},
    city: {type: String},
    location: {type: String},
    img: [{type: String}],
    owner: {type: Schema.Types.ObjectId, ref: 'Company'},
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    coments: [{type: String}]
*/

module.exports = class eventDto {
    name;
    description;
    dateStart;
    dateEnd;
    city;
    location;
    img;
    owner;
    members;
    coments

    constructor(model) {
        this.id = model._id
        this.name = model.name
        this.description = model.description
        this.dateStart = model.dateStart
        this.dateEnd = model.dateEnd
        this.city = model.city
        this.location = model.location
        this.img = model.img
        this.members = model.members
        this.coments = model.coments
        this.owner = model.owner
    }
}