import mongoose from 'mongoose';
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,   // subject to change to some Color type
        default: "White",
        trim: true,
    },
})

module.exports = mongoose.model("Category", CategorySchema);

/* class Category{
    constructor(){
        color;
        categoryName;
        displayIndex;
        indexOfToDo = {};
    }


    changeColorTo(color){
        this.color = color;
    }

}
export default Category; */