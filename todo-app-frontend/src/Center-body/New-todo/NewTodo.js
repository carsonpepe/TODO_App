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
        const { name, value } = event.target;
        if (name === "title") {
            setNewTodo(
                {
                    title: value, 
                    description: newTodo['description'], 
                    date: newTodo['date'], 
                    category: newTodo['category'],
                }
            );
        } else if (name === "description") {
            setNewTodo(
                {
                    title: newTodo['title'], 
                    description: value, 
                    date: newTodo['date'], 
                    category: newTodo['category'],
                }
            );
        } else if (name === "date") {
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
        //props.handleSubmit(newTodo);
        setNewTodo({title: '', description: '', date: '', category: ''});
    }

    return (
        <div className='newtodo'>
            <form className='form-style-9'>
                <ul>
                    <li>
                        {/* <label htmlFor="title">Title</label> */}
                        <input
                            className="field-style field-full align-none" 
                            placeholder="Title*"
                            required
                            type="text"
                            name="title"
                            id="title"
                            value={newTodo.title}
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        {/* <label htmlFor="decription">Description (OPTIONAL)</label> */}
                        <textarea
                            className='field-style field-full align-none'
                            placeholder="Description"
                            type="text"
                            name="description"
                            id="description"
                            value={newTodo.description}
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        {/* <label htmlFor="date">Date (OPTIONAL)</label> */}
                        <input
                            className='field-style field-split align-left'
                            placeholder="Date"
                            type="date"
                            name="date"
                            id="date"
                            value={newTodo.date}
                            onChange={handleChange} 
                        />
                        {/* <label htmlFor="category">Category (OPTIONAL)</label> */}
                        <input
                            className='field-style field-split align-right'
                            placeholder="Category"
                            type="text"
                            name="category"
                            id="category"
                            value={newTodo.category}
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <button className='button-58 field-full' value="Create" onClick={submitNewTodo}>Create</button> 
                    </li>
                </ul>

                
            </form>
        </div>
    );
}

export default NewTodo