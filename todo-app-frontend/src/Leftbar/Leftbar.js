import React from 'react'
import './Leftbar.css'

function Leftbar(props){

    return (
        
        <div class="leftbar">

            <div class="leftbar_header">
                <p>View Categories</p>
            </div>
            <LeftbarBody catList={props.catList}/>
        </div>
        
    );

}

function LeftbarBody(props){
   

    const categories = props.catList.map((row, index) => {
        
        if(row.color){
            return (
                <button role="button" class="button-59" style={{backgroundColor: row.color}}>{row.name}</button>
            );
        }
        return (
            
            <button role="button" class="button-59">{row.name}</button>
           
        );
    });

    return (
        <div>
            <button type="button" class="button-59">Planner</button>
            {categories}
        </div>
    );

    
}

export default Leftbar;