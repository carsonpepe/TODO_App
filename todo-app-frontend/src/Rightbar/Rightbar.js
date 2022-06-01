import React from 'react';
import './Rightbar.css';
import moment from 'moment';

function Rightbar(props){

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
                complete: false
            },
            {
                description: "Surf at Pismo",
                category: "Workout",
                date: moment('2022/05/07'),
                complete: true
            },
        ];

        return todos;
    }
    //const todos = getTodos();
    const todos = props.todoData;

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
            <hr></hr>
            <div key="subheader_completed" className="rightbar_subheader">
                <p>Completed List</p>
            </div>
            <RightbarCompleted todoList={todos}/>
        </div>
        
    );

}



function RightbarPlanned(props){

    

    const planned = props.todoList.map((row, index) => { 


        if(row.date && !row.complete){
            let data = <p><b>Date</b>: {row.date.format('MM/DD/yyyy')}</p>;
            if(row.category != null){
                data = (
                    <div className='row 0-g'>
                        <div className='col-md-6'>
                            <p><b>Category</b>: {row.category}</p>
                        </div>
                        <div className='col-md-6'>
                            <p><b>Date</b>: {row.date.format('MM/DD/yyyy')}</p>
                        </div>
                    </div>
                );
            }

            return (
                <div className="todo_item">
                    <div className="row 0-g">
                        <div className='col-md-6'>
                            <p>{row.description}</p>
                        </div>
                        <div className='col-md-6'>
                            <input type="checkbox" className='checkbox' id={index}/>
                        </div>
                    </div>
                    <div>
                        {data}
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

      

        if(!row.date && !row.complete){
            return (
                <div className="todo_item">
                    <div className="row 0-g">
                        <div className='col-md-6'>
                            <p>{row.description}</p>
                        </div>
                        <div className='col-md-6'>
                            <input type="checkbox" className='checkbox' id={index}/>
                        </div>
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

function RightbarCompleted(props){
    const completed = props.todoList.map((row, index) => {
        if(row.complete){
            if(row.date){
                let data = <p><b>Date</b>: {row.date.format('MM/DD/yyyy')}</p>;
                if(row.category != null){
                    data = (
                        <div className='row 0-g'>
                            <div className='col-md-6'>
                                <p><b>Category</b>: {row.category}</p>
                            </div>
                            <div className='col-md-6'>
                                <p><b>Date</b>: {row.date.format('MM/DD/yyyy')}</p>
                            </div>
                        </div>
                    );
                }

                return (
                    <div className="todo_item gray_out">
                        <div className="row 0-g">
                            <div className='col-md-6'>
                                <p>{row.description}</p>
                            </div>
                            <div className='col-md-6'>
                                <input type="checkbox" className='checkbox' id={index} checked onClick="this.checked=!this.checked;"/>
                            </div>
                        </div>
                        <div>
                            {data}
                        </div>
                    </div>
                );
            }else{
                let data = <div></div>;
                if(row.category != null){
                    data = <p><b>Category</b>: {row.category}</p>;
                }
                return (
                    <div className="todo_item gray_out">
                        <div className="row 0-g">
                            <div className='col-md-6'>
                                <p>{row.description}</p>
                            </div>
                            <div className='col-md-6'>
                                <input type="checkbox" className='checkbox' id={index} checked onClick="this.checked=!this.checked;"/>
                            </div>
                        </div>
                        <div className="rows 0-g">
                            <div className="col-md-12">
                                {data}
                            </div>
                        </div>
                    </div>
                );

            }
        }else{
            return (
                <div></div>
            );
        }
    });

    return (
        <div>
            {completed}
        </div>
    );
}

export default Rightbar;