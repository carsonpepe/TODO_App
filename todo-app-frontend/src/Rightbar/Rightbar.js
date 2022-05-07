import React from 'react'
import './Rightbar.css'

function Rightbar(props){

    return (
        
        <div className="rightbar">

            <div key="header" className="rightbar_header">
                <p>TODO List</p>
            </div>
            <div key="subheader_general" className="rightbar_subheader">
                <p>General List</p>
            </div>
            <RightbarUnplanned todoList={props.todoList}/>
            <hr></hr>
            <div key="subheader_planned" className="rightbar_subheader">
                <p>Planned List</p>
            </div>
            <RightbarPlanned todoList={props.todoList}/>
        </div>
        
    );

}



function RightbarPlanned(props){
    

    const planned = props.todoList.map((row, index) => {


        let data = <p><b>Date</b>: {row.date}</p>;
        if(row.category != null){
            data = <p><b>Category</b>: {row.category} <b>Date</b>: {row.date}</p>;
        }
        

        if(row.date){
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