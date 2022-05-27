import React from 'react'
import './CenterBody.css'
import Settings from './Settings/Settings';
import Planner from './Planner/Planner';
import Categories from './Categories/Categories';
import NewTodo from './New-todo/NewTodo'
import Archive from './Archive/Archive';

const SETTINGS_VIEW = 0;
const ADD_VIEW = 1;
const PLANNER_VIEW = 2;
const ARCHIVE_VIEW = 3;
const CATEGORY_VIEW = 4;
const ADD_CATEGORY_VIEW = 5;

function CenterBody(props){

    const state = props.viewState.viewType;
    const categoryType = props.viewState.categoryType;

    
    function getView(currentState, currentCat){
        
        if(currentState == SETTINGS_VIEW){
            return <Settings/>;
        }else if(currentState == ADD_VIEW){
            // Need to add props (handleSubmit={function}) to NewTodo that comply with backend
            return <NewTodo/>;
        }else if(currentState == PLANNER_VIEW){
            return <Planner/>;
        }else if(currentState == ARCHIVE_VIEW) {
            return <Archive/>;
        }else if(currentState == CATEGORY_VIEW){
            return <Categories categoryName={currentCat}/>;
        }else if(currentState == ADD_CATEGORY_VIEW){
            console.log("add cat");
        }else {
            return <Planner/>;
        }

         
    }


    return (
 
        // <div className="centerbody">
        <div>
            {getView(state, categoryType)}
        </div>
        
    );

}

export default CenterBody;
