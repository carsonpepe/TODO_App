import React, {useState} from "react";
import './Login.css';

import {
    Link,
    useNavigate
} from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState(
        {
            name: "",
        }
    );

    
    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") {
            setUser(
                {
                    name: value,
                }
            );
        }
    }

    function loginUser() {
        //see if name exists in database
        navigate("/app", {state: user.name});

        setUser(
            {
                name: "",
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