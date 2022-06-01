import React, {useEffect, useState} from 'react';
//import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './SignUp.css';

const HOME_PAGE_STATE = 3;

function SignUp(props) {
    const [newUser, setNewUser] = useState(
        {
            _id: "",
            name: "",
            todoItems: [],
            notifications: [],
            categories: [],
            settings: null,
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") {
            setNewUser(
                {
                    _id: newUser['_id'],
                    name: value,
                    todoItems: newUser['todoItems'],
                    notifications: newUser['notifications'],
                    categories: newUser['categories'],
                    settings: newUser['settings'],
                }
            );
        }
    }

    function signInNewUser() {
        const result = props.submitNewUser(newUser);
        props.setCurrentPage(
            {
                pageState: HOME_PAGE_STATE,
                userID: "",
            }
        );
        setNewUser(
            {
                _id: "",
                name: "",
                todoItems: [],
                notifications: [],
                categories: [],
                settings: null,
            }
        );
        
    }

    return(
        <div className="sign-up">
            <h2>Sign Up Page</h2>
            <form className='form-style-9'>
                <ul>
                    <li>
                        <input
                            className="field-style field-full align-none" 
                            placeholder="Username*"
                            required
                            type="text"
                            name="username"
                            id="username"
                            value={newUser.name}
                            onChange={handleChange} 
                            />
                    </li>
                    <li>
                        <button className='button-58 field-full' value="Submit" onClick={signInNewUser}>Submit</button> 
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default SignUp;