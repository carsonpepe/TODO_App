const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,   // subject to change to some sort of Color datatype
        default: "White",
        trim: true,
    },
})

module.exports = CategorySchema;