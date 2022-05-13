import React from 'react'
import './CenterBody.css'
import Settings from './Settings/Settings';
import Planner from './Planner/Planner';
import Categories from './Categories/Categories';

function CenterBody(props){

    const state = props.viewState.viewType;
    const categoryType = props.viewState.categoryType;

    
    function getView(currentState){
        
        if(currentState == 0){
            return <Settings/>;
        }else if(currentState == 1){
            return <div><p>1</p></div>;
        }else if(currentState == 2){
            return <Planner/>;
        }else if(currentState == 3){
            return <Categories/>;
        }else {
            return <Planner/>;
        }

         
    }
    const view = getView(state);

    return (
        
        <div>
            {view}
        </div>
        
    );

}

export default CenterBody;