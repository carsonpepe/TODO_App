import React, {useState} from 'react'
import './Leftbar.css'

const CATEGORY_VIEW_TYPE = 4;
const PLANNER_VIEW_TYPE = 2;
const ARCHIVE_VIEW = 3;
const ADD_CATEGORY_VIEW = 5;

function Leftbar(props){
     
    function getCats(){
        /*make api call hear and give adata to categories*/
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
        return cats;
    }
    const categories = getCats();
    // const categories = props.categoryData;

    function handleButtonPress(event){
        const {value, name} = event.currentTarget;
        props.handleCenterView({viewType: value, categoryType: name});
        
    }

    function LeftbarBody(props){
   
        const categories = props.catList.map((row, index) => {
            if(row.color){
                return (
                    <button className="button-59" style={{backgroundColor: row.color}} value={CATEGORY_VIEW_TYPE} name={row.name} onClick={handleButtonPress}>{row.name}</button>
                );
            }
            return (
                
                <button className="button-59" value={CATEGORY_VIEW_TYPE} name={row.name} onClick={handleButtonPress}>{row.name}</button>
               
            );
        });
    
        return (
            <div>
                <button className="button-59" value={PLANNER_VIEW_TYPE} name={null} onClick={handleButtonPress}>Planner</button>
                <button className="button-59" style={{backgroundColor: "#9A98C3"}} value={ARCHIVE_VIEW} name={null} onClick={handleButtonPress}>Archive</button>
                {categories}
                <button className="button-59" style={{backgroundColor: "#B6CAD6"}} value={ADD_CATEGORY_VIEW} name={null} onClick={handleButtonPress}><i>Add Category</i></button>
            </div>
        );
        
    
        
    }


    return (
        
        <div className="leftbar">

            <div className="leftbar_header">
                <p>View Categories</p>
            </div>
            <LeftbarBody catList={categories}/>
        </div>
        
    );

}

export default Leftbar;
