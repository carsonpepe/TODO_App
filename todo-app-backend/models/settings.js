const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    deletionPeriod: Number,
    theme: {
        type: Boolean,
        default: true,
    }
})

module.exports = SettingsSchema;