import React from 'react'
import './Rightbar.css'

function Rightbar(props){

    return (
        
        <div class="rightbar">

            <div class="rightbar_header">
                <p>TODO List</p>
            </div>
            <div class="rightbar_subheader">
                <p>General List</p>
            </div>
            <RightbarUnplanned todoList={props.todoList}/>
            <hr></hr>
            <div class="rightbar_subheader">
                <p>Planned List</p>
            </div>
            <RightbarPlanned todoList={props.todoList}/>
        </div>
        
    );

}



function RightbarPlanned(props){
    const planned = props.todoList.map((row, index) => {
        if(row.date){
            return (
                <div class="todo_item">
                    <div class="row">
                        <p>{row.description}</p>
                    </div>
                    <div class="rows 0-g">
                        <div class="col-md-12">
                            <p><b>Category</b>: {row.category} <b>Date</b>: {row.date}</p>
                        </div>

                    </div>
                </div>
            );
        }
        return (
            <div></div>
        );
        
    });
    return (
        <div>
            {planned}
        </div>
    );
}

function RightbarUnplanned(props){
    const planned = props.todoList.map((row, index) => {
        if(!row.date){
            return (
                <div class="todo_item">
                    <div class="row">
                        <p>{row.description}</p>
                    </div>
                    <div class="rows 0-g">
                        <div class="col-md-12">
                            <p><b>Category:</b> {row.category}</p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div></div>
        );
        
    });
    return (
        <div>
            {planned}
        </div>
    );
}

export default Rightbar;