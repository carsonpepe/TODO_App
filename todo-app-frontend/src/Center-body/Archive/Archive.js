import React from "react"
import './Archive.css'
import moment from 'moment'

function Archive(){

    function getCompleted(){
        const completed = [
            {
                title: "Go swimming",
                category: null,
                start: null,
                complete: true
            },
            {
                title: "Surf at Pismo",
                category: "Workout",
                start: moment('2022/05/07'),
                complete: true
            },
        ]
        return completed;
    }
    const completed = getCompleted();

    return (
        
        <div className="archive">
            <h4>Archive</h4>
            <div className="table-wrapper">
                <table className="fl-table">
                    <ArchiveHeader/>
                    <ArchiveBody completedTodos={completed}/>
                </table>
            </div>
        </div>
    );

    function ArchiveHeader(){
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Id</th>
                </tr>
            </thead>
        );
    }

    function ArchiveBody(props){
        const rows = props.completedTodos.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.title}</td>
                    <td>{row.category}</td>
                    <td>{(row.start ? row.start.format('MM/DD/yyyy') : null)}</td>
                    <td>123</td>
                </tr>
            );
        });

        return (
            <tbody>
                {rows}
            </tbody>
        );
    }

}
export default Archive;