import React, {useEffect, useState} from 'react';
//import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './Login.css'

const HOME_PAGE_STATE = 3;

function Login(props) {
    const [user, setUser] = useState(
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
            setUser(
                {
                    _id: user['_id'],
                    name: value,
                    todoItems: user['todoItems'],
                    notifications: user['notifications'],
                    categories: user['categories'],
                    settings: user['settings'],
                }
            );
        }
    }

    function loginUser() {
        const result = props.userLogin(user);
        props.setCurrentPage(
            {
                pageState: HOME_PAGE_STATE,
                userID: "",
            }
        );
        setUser(
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
        <div className="login">
            <h2>Login Page</h2>
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
                            value={user.name}
                            onChange={handleChange} 
                            />
                    </li>
                    <li>
                        <button className='button-58 field-full' value="Submit" onClick={loginUser}>Submit</button> 
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Login;