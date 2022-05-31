const mongoose = require("mongoose");
const userModel = require("./user");
const todoModel = require("./todo_item");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("debug", true);

mongoose
    .connect(
        "mongodb+srv://" +
        process.env.MONGO_USER +
        ":" + 
        process.env.MONGO_PWD +
        "@" + 
        process.env.MONGO_DB +
        "." +
        process.env.MONGO_CLUSTER +
        "/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).catch((error) => console.log(error));

// Todo Services
async function addTodo(id, todoItem) {
    try {
        const currentUser = findUserById(id);
        const newTodo = new todoModel(todoItem);
        currentUser.todoItems.push(newTodo);
        const savedTodo = await currentUser.save()
        return savedTodo;
    } catch (error) {
        console.log(error);
        return false;
    }
}

/* async function findTodosByCategory(id, category) {
    const currentUser = findUserById(id);

    return await todoModel.find({})
} */
    

// User Services
async function findUserById(id) {
    try {
        return await userModel.findById(id);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function addUser(user) {
    try {
        const userToAdd = new userModel(user);
        const savedUser = await userToAdd.save();
        return savedUser;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function deleteUser(id) {
    return await userModel.findByIdAndDelete(id);
}

exports.addTodo = addTodo;
exports.findUserById = findUserById;
exports.addUser = addUser;
exports.deleteUser = deleteUser;