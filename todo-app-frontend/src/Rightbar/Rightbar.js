import React from 'react';
import './Rightbar.css';
import moment from 'moment';

function Rightbar(){

    function getTodos(){
        const todos = [
            {
                description: "Buy 2% milk",
                category: null,
                date: moment('2022/05/03'),
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
                date: moment('2022/05/11'),
                complete: false
            },
            {
                description: "Buy salad",
                category: "Groceries",
                date: moment('2022/05/03'),
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
                date: moment('2022/05/07'),
                complete: false
            },
        ];

        return todos;
    }
    const todos = getTodos();

    return (
        
        <div className="rightbar">

            <div key="header" className="rightbar_header">
                <p>TODO List</p>
            </div>
            <div key="subheader_general" className="rightbar_subheader">
                <p>General List</p>
            </div>
            <RightbarUnplanned todoList={todos}/>
            <hr></hr>
            <div key="subheader_planned" className="rightbar_subheader">
                <p>Planned List</p>
            </div>
            <RightbarPlanned todoList={todos}/>
        </div>
        
    );

}



function RightbarPlanned(props){

    const planned = props.todoList.map((row, index) => { 

        if(row.date){
            let data = <p><b>Date</b>: {row.date.format('MM/DD/yyyy')}</p>;
            if(row.category != null){
                data = <p><b>Category</b>: {row.category} <b>Date</b>: {row.date.format('MM/DD/yyyy')}</p>;
            }

            return (
                <div className="todo_item">
                    <div className="row">
                        <p>{row.description}</p>
                    </div>
                    <div className="rows 0-g">
                        <div className="col-md-12">
                            {data}
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

        let data = <div></div>;
        if(row.category != null){
            data = <p><b>Category</b>: {row.category}</p>;
        }


        if(!row.date){
            return (
                <div className="todo_item">
                    <div className="row">
                        <p>{row.description}</p>
                    </div>
                    <div className="rows 0-g">
                        <div className="col-md-12">
                            {data}
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