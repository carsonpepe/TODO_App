import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            return <Settings/>;
        }else if(currentState == ADD_VIEW){
            return <NewTodo handleSubmit={props.updateTodos} categoryData={props.categoryData}/>;
        }else if(currentState == PLANNER_VIEW){
            return <Planner todoData={props.todoData}/>;
        }else if(currentState == ARCHIVE_VIEW) {
            return <Archive todoData={props.todoData}/>;
        }else if(currentState == CATEGORY_VIEW){
            return <Categories categoryName={currentCat} todoData={props.todoData} />;
        }else if(currentState == ADD_CATEGORY_VIEW){
            return <NewCategory handleSubmit={props.updateCategories}/>
        }else {
            return <Planner todoData={props.todoData}/>;
        }

         
    }


/*     return (        
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact
                        path='/settings'
                        element={<Settings />}>
                    </Route>
                    <Route exact
                        path='/addTodo'
                        element={<NewTodo handleSubmit={props.updateTodos} categoryData={props.categoryData}/>}>
                    </Route>
                    <Route exact
                        path='/planner'
                        element={<Planner todoData={props.todoData} />}>
                    </Route>
                    <Route exact
                        path='/archive'
                        element={<Archive todoData={props.todoData} />}>
                    </Route>
                    <Route exact
                        path='/categories'
                        element={<Categories categoryName={props.viewState.categoryType} todoData={props.todoData} />}>
                    </Route>
                    <Route exact
                        path='/newCategory'
                        element={<NewCategory handleSubmit={props.updateCategories} />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>  
    ); */

    return (
        <div>
            {getView(state, categoryType)}
        </div>
    )

}

export default CenterBody;
