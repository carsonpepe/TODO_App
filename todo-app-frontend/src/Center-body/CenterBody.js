import React from 'react'
import './CenterBody.css'
import NewTodo from './New-todo/NewTodo'

const SETTINGS_VIEW = 0;
const ADD_VIEW = 1;
const PLANNER_VIEW = 2;
//const CATEGORY_VIEW = 3;

function CenterBody(props){

    const state = props.viewState.viewType;
    const categoryType = props.viewState.categoryType;


    function getView(currentState){

        if(currentState === SETTINGS_VIEW) {
            return <div><p>0</p></div>;
        } else if(currentState === ADD_VIEW) {
            // Need to add props (handleSubmit={function}) to NewTodo that comply with backend
            return (
                <div className="container">
                    <NewTodo />
                </div>
            );
        } else if(currentState === PLANNER_VIEW) {
            return <div><p>2</p></div>;
        } else {
            return <div><p>3</p></div>;
        }


    }
    const view = getView(state);
    return (
 
        <div className="centerbody">
            {getView(state)}
        </div>
        
    );

}

export default CenterBody;