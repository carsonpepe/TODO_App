import React, {useState} from 'react'
import CenterBody from './Center-body/CenterBody';
import Header from './Header/Header'
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import './MyApp.css'

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
        category: null,
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
    {
        description: "Go running",
        category: null,
        date: null,
        complete: true
    },
    {
        description: "Surf at Pismo",
        category: "Workout",
        date: "05/07/2022",
        complete: false
    },
];


const PLANNER_VIEW_TYPE = 2;





function MyApp(){

    const [centerView, setView] = useState(
        {
            viewType: PLANNER_VIEW_TYPE,
            categoryType: null,
        }
     );
    
    function changeViewState(centerView){
        setView(
            {viewType: centerView.viewType, categoryType: centerView.viewType}
        );
    }
    


    return (
        <div key="myapp" className="myapp">
            <Header handleCenterView={changeViewState}/>
            <div className="row g-0">
                <div key="leftbar" className="col-md-2">
                    <Leftbar catList={cats} handleCenterView={changeViewState}/>
                </div>
                <div key="centerbody" className="col-md-6">
                    <CenterBody viewState={centerView}/>
                </div>
                <div key="rightbar" className="col-md-4">
                    <Rightbar todoList={todos}/>
                </div>
            </div>
        </div>
    );

}
export default MyApp;