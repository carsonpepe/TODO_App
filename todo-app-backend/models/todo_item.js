const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    startDate: {
        type: String, 
        required: false,
        default: '',
    },
    endDate: {
        type: String,
        required: false,
        default: '',
    },
    category: {
        type: String,
        required: false,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = TodoSchema;