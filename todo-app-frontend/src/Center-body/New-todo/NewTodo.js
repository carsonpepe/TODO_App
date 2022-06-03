import React, {useState} from 'react';
import './NewTodo.css'

function NewTodo(props){


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

        let names = [];

        for(let i = 0; i < cats.length; i++){
            names.push(cats[i].name);
        }
        names.push(null);

        return names;
    }

    let categories = getCats();
    //let categories = props.getAllCategories()

    let dropdown = categories,
        MakeItem = function(X) {
            return <option>{X}</option>
        };


    const [newTodo, setNewTodo] = useState(
        {
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            category: "",
            completed: false,
            notificationToggle: false,
            notificationTimes: [],
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "title") {
            setNewTodo(
                {
                    title: value, 
                    description: newTodo['description'], 
                    startDate: newTodo['startDate'], 
                    endDate: newTodo['endDate'],
                    category: newTodo['category'],
                    completed: newTodo['completed'],
                    notificationToggle: newTodo['notificationToggle'],
                    notificationTimes: newTodo['notificationTimes'],
                }
            );
        } else if (name === "description") {
            setNewTodo(
                {
                    title: value, 
                    description: newTodo['description'], 
                    startDate: newTodo['startDate'], 
                    endDate: newTodo['endDate'],
                    category: newTodo['category'],
                    completed: newTodo['completed'],
                    notificationToggle: newTodo['notificationToggle'],
                    notificationTimes: newTodo['notificationTimes'],
                }
            );
        } else if (name === "startDate") {
            setNewTodo(
                {
                    title: value, 
                    description: newTodo['description'], 
                    startDate: newTodo['startDate'], 
                    endDate: newTodo['endDate'],
                    category: newTodo['category'],
                    completed: newTodo['completed'],
                    notificationToggle: newTodo['notificationToggle'],
                    notificationTimes: newTodo['notificationTimes'],
                }
            );
        } else {
            setNewTodo(
                {
                    title: value, 
                    description: newTodo['description'], 
                    startDate: newTodo['startDate'], 
                    endDate: newTodo['endDate'],
                    category: newTodo['category'],
                    completed: newTodo['completed'],
                    notificationToggle: newTodo['notificationToggle'],
                    notificationTimes: newTodo['notificationTimes'],
                }
            );
        }
    }

    function submitNewTodo() {
        props.addTodoItem(newTodo);
        setNewTodo(
            {
                title: "", 
                description: "", 
                startDate: "", 
                endDate: "",
                category: "",
                completed: false,
                notificationToggle: false,
                notificationTimes: [],
        });
    }

    return (
        <div className='newtodo'>
            <h4>Add New TODO</h4>
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
                            value={newTodo.startDate}
                            onChange={handleChange} 
                        />
                        <select className='field-style field-split align-right'>
                            {dropdown.map(MakeItem)}
                        </select>
                    </li>
                    <li>
                        <button className='button-58 field-full' value="Create" onClick={submitNewTodo}>Create</button> 
                    </li>
                </ul>

                
            </form>
        </div>
    );
}

export default NewTodo;