import React from "react"
import './Categories.css'
import moment from 'moment'

function Categories(props){

    function getCategoryTodos(category){
        const todos = [
            {
                title: "Buy 2% milk",
                category: null,
                start: moment('2022/05/03'),
                complete: false
            },
            {
                title: "Deadlift 400lbs",
                category: "Workout",
                start: null,
                complete: false
            },
            {
                title: "Finish sprint 1 [csc307]",
                category: "School",
                start: moment('2022/05/11'),
                complete: false
            },
            {
                title: "Buy salad",
                category: "Groceries",
                start: moment('2022/05/03'),
                complete: false
            },
            {
                title: "Go swimming",
                category: null,
                start: null,
                complete: true
            },
            {
                title: "Tri-Tip Challenge",
                category: "Workout",
                start: null,
                complete: false
            },
            {
                title: "Go running",
                category: null,
                start: null,
                complete: false
            },
            {
                title: "Surf at Pismo",
                category: "Workout",
                start: moment('2022/05/07'),
                complete: true
            },
        ];

        let catlist = [];

        for(let i = 0; i < todos.length; i++){
                if(todos[i].category === category){
                    catlist.push(todos[i]);
                }
        }
        return catlist;

        
    }

    const category = getCategoryTodos(props.categoryName);


    return (
        <div className="categories">
            <h4>{props.categoryName}</h4>
            <div className="table-wrapper">
                <table className="fl-table">
                    <CategoriesHeader/>
                    <CategoriesBody categoryTodos={category}/>
                </table>
            </div>
        </div>
    );


    function CategoriesHeader(){
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Completed?</th>
                    <th>Date</th>
                    <th>Id</th>
                </tr>
            </thead>
        );
    }

    function CategoriesBody(props){

        const rows = props.categoryTodos.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.title}</td>
                    <td>{(row.complete ? "Yes" : "No")}</td>
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
export default Categories;