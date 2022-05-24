import mongoose from 'mongoose';
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    todoItems: {
        type: [mongoose.model('TodoItem').schema],
        required: false,
    },
    notifications: {
        type: [mongoose.model('TodoItem').schema],
        default: [],
    },
    categories: [CategorySchema],
    settings: mongoose.model('Settings').schema,

});

module.exports = mongoose.model("User", UserSchema);


/* class User{
    constructor(){
        accountID;
        displayName;
        TODOS = new Map();
        recycleBin = new Map();
        categories = new Map();
    }


    hash(item){
        return item['dateAdded'];
    }

    setCategoryColor(color){}

    deleteTodoItem(itemKey){
        TODOS.delete(itemKey)
        recycleBin.set(itemKey,TODOS.get(itemKey));
    }

    //
    addTodoItem(item){
        TODOS.set(hash(item),item);
    }

    setPlanTime(itemKey, time){
        TODOS.set(
            itemKey,
            {...TODOS.get(itemKey), planDateTime: time},
        );
    }

    changeSidebarOrder(orderingList){}

    display(){}

} */