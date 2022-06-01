import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Credentials from './Credentials/Credentials';
import Login from './Credentials/Login/Login';
import SignUp from './Credentials/Sign-up/SignUp';
import Home from './Home/Home';

import './MyApp.css';

const API_BASE_URL = "https://dodo-pro-backend.herokuapp.com/";

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
    const [centerView, setView] = useState(
        {
            viewType: PLANNER_VIEW_TYPE,
            categoryType: null,
        }
    );
    const [currentPage, setCurrentPage] = useState(
        {
            pageState: CREDENTIALS_PAGE_STATE,
            userID: "",
        }
    );

    function getPage(currentPageState, userID){
        
        if(currentPageState == CREDENTIALS_PAGE_STATE){
            return <Credentials handlePageView={changeCurrentPage}/>;
        }else if(currentPageState == LOGIN_PAGE_STATE){
            return <Login userLogin={userLogin} handlePageView={changeCurrentPage}/>;
        }else if(currentPageState == SIGN_UP_PAGE_STATE){
            return <SignUp submitNewUser={submitNewUser} handlePageView={changeCurrentPage}/>;
        }else if(currentPageState == HOME_PAGE_STATE) {
            return <Home userID={userID} categories={categories} todos={todos} handlePageView={changeCurrentPage} removeOneTODO={removeOneTODO} updateListCategories={updateListCategories} updateListTODO={updateListTODO}/>;
        }else {
            return <Credentials handlePageView={changeCurrentPage}/>;
        }   
    }

    async function fetchAllTODO(){
        try {
            const response = await axios.get(API_BASE_URL + ":userid/");
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function fetchAllCategories(){
        try {
            const response = await axios.get(API_BASE_URL + "");
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeGetCallUSER(username){
        
        try {
            const response = await axios.get(API_BASE_URL + "");
            return /** data */;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function makePostCallUSER(user){
        try {
            const response = await axios.post(API_BASE_URL + "", user);
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makePostCallTODO(todo){
        try {
            const response = await axios.post(API_BASE_URL + "", todo);
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }
    async function makePostCallCategory(category){
        try {
            const response = await axios.post(API_BASE_URL + "", category);
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    /**double check this */
    async function makePutCall(todo){
        try {
            const response = await axios.post(API_BASE_URL + "", todo);
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeDeleteCallTODO(todo){
        try{
       
          const response = await axios.delete(API_BASE_URL + todo._id);
          return response;
        }
        catch (error) {
          console.log(error);
          return false;
        }
    }
    async function makeDeleteCallCategories(category){
        try{
       
          const response = await axios.delete(API_BASE_URL + category._id);
          return response;
        }
        catch (error) {
          console.log(error);
          return false;
        }
    }

    function submitNewUser(newUser){
        makePostCallUSER(newUser).then(result => {
            if (result && result.status === 200) {
                const _id = result.body._id;
                return _id;
            }
        })
    }

    function userLogin(user){
        const username = user["name"];
        makeGetCallUSER(username).then(result => {
            setCurrentPage(
                {
                    pageState: HOME_PAGE_STATE,
                    userID: "",
                }
            );
            if (result && result.status === 200) {
                const _id = result.body._id;
                setCurrentPage(
                    {
                        pageState: HOME_PAGE_STATE,
                        userID: _id,
                    }
                );
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

    function updateListTODO(todo){
        makePostCallTODO(todo).then(result => {
            if(result && result.status === 201){
                todo = result.data;
                setTodos([...todos, todo]);
            }
        });
    }

    function updateListCategories(category){
        makePostCallCategory(category).then(result => {
            if(result && result.status === 201){
                category = result.data;
                setCategories([...categories, category]);
            }
        });
    }

    useEffect(() => {
        fetchAllTODO().then(result => {
            if(result){
                setTodos(result);
            }
        });

        fetchAllCategories().then(result => {
            if(result){
                setCategories(result);
            }
        });

    }, [] );

    


    
    function changeViewState(centerView){
        setView(
            {viewType: centerView.viewType, categoryType: centerView.categoryType}
        );
    }
    


    function changeCurrentPage(currentPageState) {
        setCurrentPage(currentPageState);
    }

    return (
        <div>
            {getPage(currentPage.pageState, currentPage.userID)}
        </div>
        
    );

}
export default MyApp;