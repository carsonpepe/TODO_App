const mongoose = require("mongoose");
const TodoSchema = require("./todo_item");
const CategorySchema = require("./category");
const SettingsSchema = require("./settings");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    todoItems: {
        type: [TodoSchema],
        required: false,
        default: [],
    },
    notifications: {
        type: [TodoSchema],
        default: [],
    },
    categories: [CategorySchema],
    settings: SettingsSchema,

});

module.exports = mongoose.model("User", UserSchema);