import React, {useState} from "react";
import './Login.css';
import axios from 'axios';

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


    async function getUserByName(name){
        try {
            const response = await axios.get("https://dodo-pro-backend.herokuapp.com/users/?name="+name);
            return response;
        } catch(error){
            console.log(error);
            return false;
        }
    }

    function loginUser() {
        const user_obj = {
            name: user.name,
            todoItems: undefined,
            notifications:undefined,
            categories: undefined,
            settings: undefined
        }
        getUserByName(user.name).then(result => {
            console.log(result);
            if(result.status === 200){
                const data = result.data;
                navigate("/app", {state: data});
            }else {
                console.log(result.status);
                console.log("user not found");
            }
        });

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