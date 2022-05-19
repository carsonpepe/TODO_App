import mongoose from 'mongoose';
const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    deletionPeriod: Number,
    theme: Boolean,
})

module.exports = mongoose.model("Settings", SettingsSchema);

/* class Settings{
    constructor(){
        notificationDefaults = {};
        deletionPeriod;
        theme;
        notificationTimes = {};
    }

    updateNotificationTimes(times){}
}
 */

