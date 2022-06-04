import React, {useEffect, useState} from 'react'
import CenterBody from './Center-body/CenterBody';
import Header from './Header/Header'
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import './MyApp.css'


const PLANNER_VIEW_TYPE = 2;
const API_BASE = "https://dodo-pro-backend.herokuapp.com";



function MyApp(){

    const location = useLocation();
    let user = location.state;
    console.log(user._id);

    
    

    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);


    async function fetchAllTODO(){
        try {
            const response = await axios.get(API_BASE + `/users/${user._id}/todoItems`);
            return response.data;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function fetchAllCategories(){
        try {
            const response = await axios.get(API_BASE + `/users/${user._id}/categories`);
            return response.data;
        } catch (error){
            console.log(error);
            return false;
        }
    }


    async function makePostCallTODO(todo){
        
        try {
            const response = await axios.post(API_BASE + `/users/${user._id}/todoItems`, todo);
            return response.data;
        } catch (error){
            console.log(error);
            return false;
        }
    }
    async function makePostCallCategory(category){
        console.log(category);
        try {
            const response = await axios.post(API_BASE + `/users/${user._id}/categories`, category);
            return response.data;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    /**double check this */
    async function makePutCall(todo){
        try {
            const response = await axios.post(/*api call to post */"", todo);
            return /** data */;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    async function makeDeleteCallTODO(todo){
        try{
       
          const response = await axios.delete(''/**api call to delete */ + todo._id);
          return response;
        }
        catch (error) {
          console.log(error);
          return false;
        }
    }
    async function makeDeleteCallCategories(category){
        try{
       
          const response = await axios.delete(''/**api call to delete */ + category._id);
          return response;
        }
        catch (error) {
          console.log(error);
          return false;
        }
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
        console.log(todo);
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
            console.log(result);
            if(result){
                setTodos(result);
            }
        });

        fetchAllCategories().then(result => {
            console.log(result);
            if(result){
                setCategories(result);
            }
        });

    }, [] );

    

    const [centerView, setView] = useState(
        {
            viewType: PLANNER_VIEW_TYPE,
            categoryType: null,
        }
     );
    
    function changeViewState(centerView){
        setView(
            {viewType: centerView.viewType, categoryType: centerView.categoryType}
        );
    }
    


    return (
        <div key="myapp" className="myapp">
            <Header handleCenterView={changeViewState}/>
            <div className="row g-0">
                <div key="leftbar" className="col-md-2">
                    <Leftbar handleCenterView={changeViewState} categoryData={categories}/>
                </div>
                <div key="centerbody" className="col-md-6">
                    <CenterBody viewState={centerView} todoData={todos} categoryData={categories} updateCategories={updateListCategories} updateTodos={updateListTODO}/>
                </div>
                <div key="rightbar" className="col-md-4">
                    <Rightbar todoData={todos} deleteTODO={removeOneTODO}/>
                </div>
            </div>
        </div>
    );

}
export default MyApp;