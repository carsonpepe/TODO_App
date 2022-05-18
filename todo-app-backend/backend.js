const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// import User from "./user";
// import Settings from "./settings";

app.use(cors());
app.use(express.json());

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: new Map([[1,2]]),
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: new Map([[1,2]]),
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: new Map([[1,2]]),
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: new Map([[1,2]]),
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: new Map([[1,2]]),
       }
    ]
 }



app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    if(name != undefined && job != undefined){
        let result = findUserByJobAndName(name,job);
        result = {users_list: result};
        res.send(result);
    }
    else if (name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

app.post('/users', (req, res) => {
    
    console.log("app.post");

    const userToAdd = req.body;
    addUser(userToAdd);
    userToAdd.id = makeId();
    res.status(201).send(userToAdd);
});

app.delete('/users', (req, res) => {
    const userToDelete = req.body;
    deleteUser(userToDelete);
    res.status(204).end();
});

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        deleteUser(result);
        res.status(204).end();
    }
});


function makeId(){
    var c = require("crypto");
    var id = c.randomBytes(3).toString('hex');
    return id;
}


function addUser(user){
    users['users_list'].push(user);
    
}
function deleteUser(user){
    const index = users['users_list'].indexOf(user);
    users['users_list'].splice(index, 1);
}

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id);
}

const findUserByName = (name) => { 
    return users['users_list'].filter( (user) => user['name'] === name); 
}

function findUserByJobAndName(name, job) {
    return users['users_list'].find( (user) => 
    user['name'] === name && user['job'] === job);
}

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      