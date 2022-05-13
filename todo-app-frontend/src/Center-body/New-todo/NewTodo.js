import React, {useState} from 'react';
import './NewTodo.css'
import add from '../../resources/images/add.png'

function NewTodo(props){
    const [newTodo, setNewTodo] = useState(
        {
            title: "",
            description: "",
            date: "",
            category: "",
        }
    );

    function handleChange(event) {
        const { fieldName, value } = event.target;
        if (fieldName === "title") {
            setNewTodo(
                {
                    title: value, 
                    description: newTodo['description'], 
                    date: newTodo['date'], 
                    category: newTodo['category'],
                }
            );
        } else if (fieldName === "description") {
            setNewTodo(
                {
                    title: newTodo['title'], 
                    description: value, 
                    date: newTodo['date'], 
                    category: newTodo['category'],
                }
            );
        } else if (fieldName === "date") {
            setNewTodo(
                {
                    title: newTodo['title'], 
                    description: newTodo['description'], 
                    date: value, 
                    category: newTodo['category'],
                }
            );
        } else {
            setNewTodo(
                {
                    title: newTodo['title'], 
                    description: newTodo['description'], 
                    date: newTodo['date'], 
                    category: value,
                }
            );
        }
    }

    function submitNewTodo() {
        props.handleSubmit(newTodo);
        setNewTodo({title: '', description: '', date: '', category: ''});
    }

    return (
        <form>
            <div className="newtodo_icon">
                <input type="image" src={add} alt="add" width="35" height="35"></input>
            </div>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            name="title"
            id="title"
            value={newTodo.title}
            onChange={handleChange} />
            <label htmlFor="decription">Description (OPTIONAL)</label>
            <input
            type="text"
            name="description"
            id="description"
            value={newTodo.description}
            onChange={handleChange} />
            <label htmlFor="date">Date (OPTIONAL)</label>
            <input
            type="text"
            name="date"
            id="date"
            value={newTodo.date}
            onChange={handleChange} />
            <label htmlFor="category">Category (OPTIONAL)</label>
            <input
            type="text"
            name="category"
            id="category"
            value={newTodo.category}
            onChange={handleChange} />
            <input type="button" value="Create" onClick={submitNewTodo} />
        </form>
    );
}

export default NewTodo