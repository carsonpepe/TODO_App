import React from 'react'
import './CenterBody.css'
import Settings from './Settings/Settings';
import Planner from './Planner/Planner';
import Categories from './Categories/Categories';
import NewTodo from './New-todo/NewTodo'

const SETTINGS_VIEW = 0;
const ADD_VIEW = 1;
const PLANNER_VIEW = 2;
const CATEGORY_VIEW = 3;

function CenterBody(props){

    const state = props.viewState.viewType;
    const categoryType = props.viewState.categoryType;

    
    function getView(currentState){
        
        if(currentState == SETTING_VIEW){
            return <Settings/>;
        }else if(currentState == ADD_VIEW){
            // Need to add props (handleSubmit={function}) to NewTodo that comply with backend
            return <NewTodo/>;
        }else if(currentState == PLANNER_VIEW){
            return <Planner/>;
        }else if(currentState == CATEGORY_VIEW){
            return <Categories/>;
        }else {
            return <Planner/>;
        }

         
    }


    return (
 
        <div className="centerbody">
            {getView(state)}
        </div>
        
    );

}

export default CenterBody;
