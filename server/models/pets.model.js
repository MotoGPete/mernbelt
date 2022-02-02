const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');


const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"],
        unique: [true, "name must be unique"],
        minLength: [3, "name must be at least 3 character long"]
    },

    description: {
        type: String,
        required: [true, "description required"],
        minLength: [2, "description must be at least two characters long"]
    },
    type: {
        type: String,
        required: [true, "type required"],
        minLength: [2, "must be greater than 2"],        
    },
    skill1: {
        type: String
        
    },
    skill2: {
        type: String
    },
    skill2: {
        type: String
    }
}, { timestamps: true })

PetsSchema.plugin(uniqueValidator);
const Pets = mongoose.model("Pets", PetsSchema)
module.exports = Pets