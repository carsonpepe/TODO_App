import React from 'react'
import CenterBody from './Center-body/CenterBody';
import Header from './Header/Header'
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';

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



function MyApp(){

    return (
        <div>
            <Header/>
            <div class="row g-0">
                <div class="col-md-2">
                    <Leftbar catList={cats}/>
                </div>
                <div class="col-md-6">
                    <CenterBody/>
                </div>
                <div class="col-md-4">
                    <Rightbar todoList={todos}/>
                </div>
            </div>
        </div>
    );

}
export default MyApp;