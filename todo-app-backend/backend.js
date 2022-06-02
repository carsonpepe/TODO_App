const express = require('express');
const mongoose = require("mongoose");

const services = require("./models/services")

const app = express();
const port = 5000;

const cors = require('cors');

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://dodo-pro.herokuapp.com/");
    next()
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/users', async (req, res) => {
    const name = req.query.name;
    if (name != undefined){
        const result = await services.getUserByUsername(name);
        if (result === undefined || result.length == 0)
            res.status(404).send('Resource not found.');
        else {
            res.send(result);
        }
    }
});


app.get('/users/:id', async (req, res) => {
    const id = req.params['id'];
    let result = services.findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        res.status(200).send(result);
    }
});

app.get('/users/:id/todoItems', async (req, res) => {
    // NOT DONE
    const id = req.params['id'];
    let result = services.findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        res.status(200).send(result);
    }
});

app.get('/users/:id/settings', async (req, res) => {
    // NOT DONE
    const id = req.params['id'];
    let result = services.findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        res.status(200).send(result);
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

app.post('/users', async (req, res) => {
    //console.log("app.post");
    const userToAdd = req.body;
    const savedUser = await services.addUser(userToAdd);
    if (savedUser) res.status(201).send(savedUser);
    else {
        console.log(userToAdd);
        console.log(savedUser);
        res.status(500).end();
    }
});

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