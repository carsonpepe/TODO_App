import React, {useState} from "react";
import '../Login/Login.css';

import {
    useNavigate
} from "react-router-dom";

export default function Signup() {

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
        //push user to database
        navigate("/app", {state: user.name});

        setUser(
            {
                name: "",
            }
        );
    }

    return(
        <div className="login">
            <h2>Signup Page</h2>
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