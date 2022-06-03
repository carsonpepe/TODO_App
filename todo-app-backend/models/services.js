const mongoose = require("mongoose");
const userModel = require("./user");
const todoModel = require("./todo_item");
const dotenv = require("dotenv");

dotenv.config();

/*
mongoose.set("debug", true);
*/
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
        "/" +
        "DODOpro" +
        "?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).catch((error) => console.log(error));


// function to add a new user to the backend
async function addUser(user) {
    console.log('enter adduser function');
    try {
        const userExists = await getUserbyUsername(user);
        console.log('finished getuserbyusername successfully'+ userExists);
        if (userExists) {
            //this means the suers is already int he database, not a new user
            console.log('user exists');
            return false;
        } 
        else {
            const userToAdd = new userModel(user);
            const savedUser = await userToAdd.save();
            return userToAdd;
        }

    } catch (error) {
        console.log("1" + error);
        return false;
    }
}

// Todo Services
async function addTodo(id, todoItem) {
    try {
        const currentUser = findUserById(id);
        const newTodo = new todoModel(todoItem);
        currentUser.todoItems.push(newTodo);
        const savedTodo = await currentUser.save();
        return savedTodo;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//returns a user based on the provided username
async function getUserbyUsername(user){
    console.log(user["name"]);
    try {
        userModel.find({name: user["name"]}, await function (err, docs) {
            if (err) {
                console.log("2" + err);
                return false;
            } else {
                console.log("found existing user");
                return docs;
            }
        });
    } 
    catch (error) {
        console.log("3"+ error);
        return false;
    }
}

async function findUserById(id) {
    try {
        
        return await userModel.findById(id);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}



/* async function findTodosByCategory(id, category) {
    const currentUser = findUserById(id);

    return await todoModel.find({})
} */

// theoretical function to replace all get-todos based on whatever props given
//magic todo get
async function getTodos(id){
    console.log(id);
    const currentUser = await findUserById(id);
    console.log(currentUser._id);
    foundTodos = currentUser.todoItems;
    if (!foundTodos) {
        console.log(foundTodos);
        return [];
    }
    return foundTodos;
}

async function getUserSettings(id){
    const currentUser = await findUserById(id);
    return currentUser.settings;
}


async function findTodosByCategory(id, category_name) {
    const currentUser = findUserById(id);
    currentUser.todoItems.find({category: category_name, completed: false});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function findTodosByCompleted(id, complete_val) {
    const currentUser = findUserById(id);
    currentUser.todoItems.find({completed: complete_val});
    const savedTodos = await currentUser.save();
    return savedTodos;
}

async function markCompleted(id, todo_id){
    const currentUser = findUserById(id);
    currentUser.todoItems.findByIdAndUpdate(todo_id, {completed: true});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function markUncomplete(id, todo_id){
    const currentUser = findUserById(id);
    currentUser.todoItems.findByIdAndUpdate(todo_id, {completed: false});
    const savedTodo = await currentUser.save();
    return savedTodo;
}
    
async function removeCompleted(id){
    const currentUser = findUserById(id);
    // return await currentUser.todoItems.deleteMany({completed: { $eq: true}});
    currentUser.todoItems.deleteMany({completed: { $eq: true}});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function changeDescription(id, todo_id, new_description){
    const currentUser = findUserById(id);
    currentUser.findByIdAndUpdate(todo_id, {description: new_description});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function changeTitle(id, todo_id, new_title){
    const currentUser = findUserById(id);
    currentUser.findByIdAndUpdate(todo_id, {title: new_title});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function turnNotificationsOn(id,todo_id){
    const currentUser = findUserById(id);
    currentUser.todoItems.findByIdAndUpdate(todo_id, {notificationToggle: true});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function turnNotificationsOff(id,todo_id){
    const currentUser = findUserById(id);
    currentUser.todoItems.findByIdAndUpdate(todo_id, {notificationToggle: false});
    const savedTodo = await currentUser.save();
    return savedTodo;
}

async function changeCategory(id, todo_id, new_category){
    // maybe a check to see if the category exists?
    const currentUser = findUserById(id);
    currentUser.findByIdAndUpdate(todo_id, {category: new_category});
    const savedTodo = await currentUser.save();
    return savedTodo;
}


// User Services



async function deleteUser(id) {
    return await userModel.findByIdAndDelete(id);
}

exports.addTodo = addTodo;
exports.findUserById = findUserById;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.getUserbyUsername = getUserbyUsername;
exports.findUserById = findUserById;
exports.findTodosByCategory = findTodosByCategory;
exports.markCompleted = markCompleted;
exports.markUncomplete = markUncomplete;
exports.removeCompleted = removeCompleted;
exports.changeDescription = changeDescription;
exports.changeTitle = changeTitle;
exports.turnNotificationsOn = turnNotificationsOn;
exports.turnNotificationsOff = turnNotificationsOff;
exports.changeCategory = changeCategory;
exports.getUserSettings = getUserSettings;
exports.getTodos = getTodos;
exports.findTodosByCompleted = findTodosByCompleted;