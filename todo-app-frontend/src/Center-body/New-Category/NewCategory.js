import React, {useState} from 'react';
import './NewCategory.css'


function NewCategory(props){
    const [newCat, setNewCat] = useState(
        {
            name: "",
            color: "",
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "name") {
            setNewCat(
                {
                    name: value, 
                    color: newCat['color'], 
                }
            );
        } else {
            setNewCat(
                {
                    name: newCat['name'], 
                    color: value, 
                }
            );
        } 
    }

    function submitNewCat() {
        props.handleSubmit(newCat);
        setNewCat({name: '', color: ''});
    }

    return (
        <div className='newcat'>
            <h4>Add Category</h4>
            <form className='form-style-9'>
                <ul>
                    <li>
                        <input
                            className="field-style field-75 align-none" 
                            placeholder="Name*"
                            required
                            type="text"
                            name="name"
                            id="name"
                            value={newCat.name}
                            onChange={handleChange} 
                        />
                    
                        <input
                            className="field-style align-right" 
                            placeholder="Color*"
                            required
                            type="color"
                            name="color"
                            id="color"
                            value={newCat.color}
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <button className='button-58 field-full' value="Create" onClick={submitNewCat}>Create</button> 
                    </li>
                </ul>

                
            </form>
        </div>
    );
}

export default NewCategory