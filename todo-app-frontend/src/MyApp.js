import React, {useState} from 'react'
import axios from 'axios';
import './MyApp.css';

import Credentials from './Credentials/Credentials';
import Login from './Credentials/Login/Login';
import SignUp from './Credentials/Sign-up/SignUp';
import Home from './Home/Home';

const API_BASE_URL = "https://dodo-pro-backend.herokuapp.com";

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
            _id: "",
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
                handlePageView={changeCurrentPage} 
                removeOneTODO={removeOneTODO} 
                updateListCategories={addNewCategory} 
                fetchAllTodo={fetchAllTodo}
                setTodos={setTodos}
                fetchAllCategories={fetchAllCategories}
                setCategories={setCategories}
                addTodoItem={addTodoItem}
                getDatedTodos={makeGetCallDatedTodos}
                getSettings={makeGetCallSettings}
                getCompletedTodos={makeGetCallCompletedTodos}/>
            );
        }else {
            return <Credentials handlePageView={changeCurrentPage}/>;
        }   
    }

    async function fetchAllTodo(){
        try {
            console.log("fetchAllTODO1");
            console.log(currentPage._id)
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage._id}/todoItems`);
            console.log("fetchAllTODO2");
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function fetchAllCategories(){
        try {
            console.log("fetchAllCategories1");
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage._id}/categories`);
            console.log("fetchAllCategories2");
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeGetCallSettings(){
        try {
            console.log("makeGetCallSettings1");
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage._id}/settings`);
            console.log("makeGetCallSettings2");
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallUSER(username){ 
        try {
            console.log("makeGetCallUSER1");
            const response = await axios.get(API_BASE_URL + `/users?name=${username}`);
            console.log("makeGetCallUSER2");
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallDatedTodos(){
        try {
            console.log("makeGetCallDatedTodos1");
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage._id}/todoItems?startDate!=false`);
            console.log("fmakeGetCallDatedTodos2");
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallCompletedTodos(){
        try{
            console.log("makeGetCallCompletedTodos1");
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage._id}/todoItems?completed=true`);
            console.log("makeGetCallCompletedTodos2");
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makePostCallUSER(user){
        try {
            console.log("makePostCallUSER1");
            const response = await axios.post(API_BASE_URL + "/users", user);
            console.log("makePostCallUSER2");
            return response;
        } catch (error){
            console.log(error);
            return false;
        } 
    }

    async function makePostCallTODO(todo){
        try {
            console.log("makePostCallTODO1");
            const response = await axios.post(API_BASE_URL + `/users/:${currentPage._id}/todoItems`, todo);
            console.log("makePostCallTODO2");
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }
    async function makePostCallCategory(category){
        try {
            console.log("makePostCallCategory1");
            const response = await axios.post(API_BASE_URL + `/users/:${currentPage._id}/categories`, category);
            console.log("makePostCallCategory2");
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeDeleteCallTODO(todo){
        try{
            const todoID = todo["id"];
            const response = await axios.delete(API_BASE_URL + `/users/:${currentPage._id}/todoItems?=${todoID}`);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async function makeDeleteCallCategories(category){
        try{
            const categoryID = category["id"];
            const response = await axios.delete(API_BASE_URL + `/users/:${currentPage._id}/categories?=${categoryID}`);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makeGetCallArchives(){
        try{
            const response = await axios.get(API_BASE_URL + `/users/:${currentPage._id}/todoItems/completed?=true`);
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
                if (result.data) {
                    console.log("submit user data exists");
                } else {
                    console.log("no data retuned");
                }
                const _id = result.data._id;
                const name = result.data.name;
                console.log(_id);
                setCurrentPage(
                    {
                        pageState: HOME_PAGE_STATE,
                        _id: _id,
                    }
                )
            } else {
                console.log(result.status);
            }
        })
    }

    function addTodoItem(todoItem) {
        makePostCallTODO(todoItem).then(result => {
            if (result.status === 200) {
                const _id = result.data._id;
                const title = result.data.title;
                console.log(_id);
                console.log(title);
                /* return result.data; */
            } else {
                console.log(result);
                return false;
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
                        _id: _id,
                    }
                );
            } else {
                console.log(result.status);
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