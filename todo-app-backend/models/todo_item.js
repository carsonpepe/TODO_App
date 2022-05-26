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
    date: {
        // Date type doesn't save normally. If date is modified...
        // --> "doc.markModified('pathToDate');" THEN save
        type: Date, 
        required: false,
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
    notificationToggle: {
        type: Boolean,
        default: false,
    },
    // Date type doesn't save normally. If date is modified...
    // --> "doc.markModified('pathToDate');" THEN save
    notificationTimes: [Date],
});

module.exports = TodoSchema;