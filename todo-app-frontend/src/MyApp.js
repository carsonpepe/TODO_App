import React, { useState } from 'react';
import CenterBody from './Center-body/CenterBody';
import Header from './Header/Header'
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import useToken from './useToken';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

const cats = [
    {
        name: "Groceries",
        color: "blue"
    },
    {
        name: "Workout",
        color: "red"
    },
    {
        name: "School",
        color: "green"
    },
    {
        name: "Job",
        color: "pink"
    },
];

const todos = [
    {
        description: "Buy 2% milk",
        category: "Groceries",
        date: "05/03/2022",
        complete: false
    },
    {
        description: "Deadlift 400lbs",
        category: "Workout",
        date: null,
        complete: false
    },
    {
        description: "Finish sprint 1 [csc307]",
        category: "School",
        date: "05/11/2022",
        complete: false
    },
    {
        description: "Buy salad",
        category: "Groceries",
        date: "05/04/2022",
        complete: false
    },
    {
        description: "Go swimming",
        category: null,
        date: null,
        complete: true
    },
    {
        description: "Tri-Tip Challenge",
        category: "Workout",
        date: null,
        complete: false
    },
];

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}



function MyApp(){
    const { token, setToken } = useToken();
    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
    <div className="wrapper">
      <h1>Application</h1>
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/preferences">
                    <Preferences />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );

}
export default MyApp;