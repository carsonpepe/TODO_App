import React, { useState } from 'react';

import Credentials from './Credentials/Credentials';
import Login from './Credentials/Login/Login';
import SignUp from './Credentials/Sign-up/SignUp';
import Home from './Home/Home';

import './MyApp.css';

import axios from 'axios';

/* var data = JSON.stringify({
    "collection": "users",
    "database": "test",
    "dataSource": "DODOpro",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-wbrjr/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'PJahpeZEdssPw3bhrJSLEmOaT6GoXMCLhQCSnakJI6MDq8cb5vMcVFDK0Mun5PP4'
    },
    data : data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    }); */

const API_BASE_URL = "https://dodo-pro-backend.herokuapp.com";
//const API_BASE_URL= "https://data.mongodb-api.com/app/data-wbrjr/endpoint/data/v1";

const PLANNER_VIEW_TYPE = 2;

const CREDENTIALS_PAGE_STATE = 0;
const LOGIN_PAGE_STATE = 1;
const SIGN_UP_PAGE_STATE = 2;
const HOME_PAGE_STATE = 3;

const API_BASE = 'base';
const API_USER = 'user';


function MyApp(){

    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(
        {
            pageState: CREDENTIALS_PAGE_STATE,
            userID: "",
        }
    );

    function getPage(currentPageState){
        
        if(currentPageState == CREDENTIALS_PAGE_STATE){
            return <Credentials handlePageView={changeCurrentPage}/>;
        }else if(currentPageState == LOGIN_PAGE_STATE){
            return <Login userLogin={userLogin}/>;
        }else if(currentPageState == SIGN_UP_PAGE_STATE){
            return <SignUp submitNewUser={submitNewUser}/>;
        }else if(currentPageState == HOME_PAGE_STATE) {
            return (<Home 
                categories={categories} 
                todos={todos} 
                handlePageView={changeCurrentPage} 
                removeOneTODO={removeOneTODO} 
                updateListCategories={addNewCategory} 
                fetchAllTODO={fetchAllTODO}
                setTodos={setTodos}
                fetchAllCategories={fetchAllCategories}
                setCategories={setCategories}
                addTodoItem={addTodoItem}
                getDatedTodos={makeGetCallDatedTodos}
                getSettings={makeGetCallSettings}/>
            );
        }else {
            return <Credentials handlePageView={changeCurrentPage}/>;
        }   
    }

    async function fetchAllTODO(){
        try {
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage.userID}/todoItems`);
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function fetchAllCategories(){
        try {
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage.userID}/categories`);
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeGetCallSettings(){
        try {
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage.userID}/settings`);
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallUSER(username){ 
        try {
            const response = await axios.get(API_BASE_URL + `/users?name=${username}`);
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallDatedTodos(){
        try {
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage.userID}/todoItems?date!=false`);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makePostCallUSER(user){
        try {
            const response = await axios.post(API_BASE_URL + "/users", user);
            return response;
        } catch (error){
            console.log(error);
            return false;
        } 
    }

    async function makePostCallTODO(todo){
        try {
            const response = await axios.post(API_BASE_URL + `/users/:${currentPage.userID}/todoItems`, todo);
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }
    async function makePostCallCategory(category){
        try {
            const response = await axios.post(API_BASE_URL + `/users/:${currentPage.userID}/categories`, category);
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeDeleteCallTODO(todo){
        try{
            const todoID = todo["_id"];
            const response = await axios.delete(API_BASE_URL + `/users/:${currentPage.userID}/todoItems?=${todoID}`);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async function makeDeleteCallCategories(category){
        try{
            const categoryID = category["_id"];
            const response = await axios.delete(API_BASE_URL + `/users/:${currentPage.userID}/categories?=${categoryID}`);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallArchives(){
        try{
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage.userID}/todoItems/completed?=true`);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    function submitNewUser(newUser){
        makePostCallUSER(newUser).then(result => {
            if (result.status === 201) {
                const _id = result.data._id;
                const name = result.data.name;
                console.log(name);
                setCurrentPage(
                    {
                        pageState: HOME_PAGE_STATE,
                        userID: _id,
                    }
                )
            } else {
                console.log(result.status);
            }
        })
    }

    function userLogin(user){
        const username = user["name"];
        makeGetCallUSER(username).then(result => {
            if (result && result.status === 200) {
                const _id = result.data._id;
                setCurrentPage(
                    {
                        pageState: HOME_PAGE_STATE,
                        userID: _id,
                    }
                );
            } else {
                console.log(result.status);
            }
        })
    }

    function addTodoItem(todoItem) {
        makePostCallTODO(todoItem).then(result => {
            if (result && result.status === 200) {
                return result.data;
            } else {
                console.log(result);
                return false;
            }
        })
    }

    function removeOneTODO(index){
        const rm_todo = todos.filter((todo, i) => {
            return i === index;
        });
        makeDeleteCallTODO(rm_todo[0]).then(result => {
            if(result && result.status === 204){
                const updated = todos.filter((todo, i) => {
                    return i !== index;
                });
                setTodos(updated);
            }
        })
    }

    function removeOneCategory(index){
        const rm_category = categories.filter((category, i) => {
            return i === index;
        });
        makeDeleteCallCategories(rm_category[0]).then(result => {
            if(result && result.status === 204){
                const updated = categories.filter((category, i) => {
                    return i !== index;
                });
                setCategories(updated);
            }
        })
    }

    function addNewCategory(category){
        makePostCallCategory(category).then(result => {
            if(result && result.status === 201){
                category = result.data;
                setCategories([...categories, category]);
            }
        });
    }


    function changeCurrentPage(currentPageState) {
        setCurrentPage(currentPageState);
    }

    return (
        <div>
            {getPage(currentPage.pageState)}
        </div>
        
    );

}
export default MyApp;