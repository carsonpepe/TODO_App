const express = require('express');
const mongoose = require("mongoose");

const services = require("./models/services");

const app = express();
const port = 5000;

const cors = require('cors');

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://dodo-pro.herokuapp.com/");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    next()
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// used when login
app.get('/users', async (req, res) => {
    const name = req.query.name;
    if (name != undefined){
        const result = await services.getUserByUsername(name);
        console.log(result);
        console.log(result.length);
        if (result === undefined || result.length == 0)
            res.status(405).send('Resource not found.');
        else {
            res.status(200).send(result);
        }
    }
});

//endpoint to get a user value by ID
app.get('/users/:id', async (req, res) => {
    const id = req.params["id"];
    console.log("calling findUserById");
    let result = await services.findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        res.status(200).send(result);
        console.log("successfully findUserByID");
    }
});

app.post('/users', async (req, res) => {
    //console.log("app.post");
    const userToAdd = req.body;
    const savedUser = await services.addUser(userToAdd);
    if (savedUser) {
        console.log(savedUser._id)
        res.status(201).send(savedUser);
    }
    else {
        console.log(userToAdd);
        console.log(savedUser);
        res.status(500).end();
    }
});

//endpoint that adds a todo
app.post("users/:id/todoItems", async (req, res) => {
    const id = req.params["id"];
    const todoData = req.body;
    try {
        const tdi = await services.addTodo(id, todoData);
        if (tdi) res.status(200).send(tdi);
        else {
            console.log(tdi);
            console.log(req.body);
            res.status(500).end();
        }
    } catch (error) {
        console.log("Mongoose error: " + error);
        res.status(500).send("An error ocurred in the server.");
    }

});

app.post("users/:id/categories", async (req, res) => {
    const id = req.params["id"];
    const categoryData = req.body;
    try {
        const result = await services.addCategory(id, categoryData);
        res.status(200).send(result);
    } catch (error) {
        console.log("Mongoose error: " + error);
        res.status(500).send("An error ocurred in the server.");
    }  

});

//Endpoint for Getting TODOS from a user, query
app.get('/users/:id/todoItems', async (req, res) => {
    console.log(req.params);
    const id = req.params["id"]; // THIS LINE RETURNS NULL 
    if (!req.params) {
        console.log("No params passed");
    }
    console.log(id);
    const completed = req.query.completed;
    const categories = req.query.categories;
    if (completed === undefined && categories === undefined) {
        try {
            console.log("about to getTodos()");
            const result = await services.getTodos(id);
            res.status(200).send(result);
        } catch (error){
            console.log("Mongoose error: " + error);
            res.status(500).send("An error ocurred in the server.");
        }
    } else if (completed === undefined){
        try {
            const result = await services.findTodosByCategory(id, categories);
            res.status(200).send(result);
        } catch (error){
            console.log("Mongoose error: " + error);
            res.status(500).send("An error ocurred in the server.");
        }
    } else {
        try {
            const result = await services.findTodosByCompleted(id, completed);
            res.status(200).send(result);
        } catch (error){
            console.log("Mongoose error: " + error);
            res.status(500).send("An error ocurred in the server.");
        }
        
    }

/*     let result = await services.getTodos(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        console.log("successfully got getTodos()");
        res.status(200).send(result);
    } */
});
//just query for whole settings object, should always get whole thing at once
app.get('/users/:id/settings', async (req, res) => {
    console.log("entered backend.js get settings")
    const id = req.params['id'];
    /* let user = await services.findUserById(id); */
    try {
        const result = await services.getUserSettings(id);
        res.status(200).send(result);
    } catch (error){
        console.log("Mongoose error: " + error);
        res.status(500).send("An error ocurred in the server.");
    }
    
/*     if (result === undefined)
        res.status(404).send('Resource not found.');
    else {
        res.status(200).send(result);
    } */
});

app.get('/users/:id/categories', async (req, res) => {
    console.log("entered backend.js get categories")
    const id = req.params['id'];
    /* let user = await services.findUserById(id); */
    try {
        const result = await services.getUserCategories(id);
        res.status(200).send(result);
    } catch (error){
        console.log("Mongoose error: " + error);
        res.status(500).send("An error ocurred in the server.");
    }
});

app.delete('/users/:id', async (req, res) => {
    const id = req.params['id']; //or req.params.id
    if (deleteUserById(id)) res.status(204).end();
    else res.status(404).send("Resource not found.");
});

async function deleteUserById(id) {
    try {
        if (await services.deleteUser(id)) return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}


app.patch("/users/:id", async (req, res) => {
    const id = req.params["id"];
    const updatedUser = req.body;
    const result = await updateUser(id, updatedUser);
    if (result === 204) res.status(204).end();
    else if (result === 404) res.status(404).send("Resource not found.");
    else if (result === 500)
        res.status(500).send("An error ocurred in the server.");
});



async function updateUser(id, updatedUser) {
    try {
        const result = await services.findByIdAndUpdate(id, updatedUser);
        if (result) return 204;
        else return 404;
    } catch (error) {
        console.log(error);
        return 500;
    }
}

app.listen(process.env.PORT || port, () => {
    if (process.env.PORT)
        console.log(`REST API is listening on port: ${process.env.PORT}.`);
    else console.log(`Example app listening at http://localhost:${port}`);
});      