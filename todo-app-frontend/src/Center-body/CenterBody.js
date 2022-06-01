import React from 'react';
import './CenterBody.css';

import Settings from './Settings/Settings';
import Planner from './Planner/Planner';
import Categories from './Categories/Categories';
import NewTodo from './New-todo/NewTodo'
import Archive from './Archive/Archive';
import NewCategory from './New-Category/NewCategory';

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
            return <Settings getSettings={props.getSettings}/>;
        }else if(currentState == ADD_VIEW){
            return <NewTodo categoryData={props.categoryData} addTodoItem={props.addTodoItem}/>;
        }else if(currentState == PLANNER_VIEW){
            return <Planner getDatedTodos={props.getDatedTodos}/>;
        }else if(currentState == ARCHIVE_VIEW) {
            return <Archive tododata={props.todoData}/>;
        }else if(currentState == CATEGORY_VIEW){
            return <Categories categoryName={currentCat} todoData={props.todoData} />;
        }else if(currentState == ADD_CATEGORY_VIEW){
            return <NewCategory addNewCategory={props.addNewCategory}/>
        }else {
            return <Planner tododata={props.todoData}/>;
        }

         
    }

    return (
        <div>
            {getView(state, categoryType)}
        </div>
    )

}

export default CenterBody;
