const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    deletionPeriod: Number,
    theme: Boolean,
})

module.exports = SettingsSchema;