import React, {useState} from "react";
import '../Login/Login.css';
import axios from 'axios';

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

    async function getUserByName(name){
        try {
            const response = await axios.get("https://dodo-pro-backend.herokuapp.com/users?="+name);
            return response.data;
        } catch(error){
            console.log(error);
            return false;
        }
    }

    async function makePostCallUser(user){
        try {
            const response = await axios.post("https://dodo-pro-backend.herokuapp.com/users", user);
            return response;
        } catch (error){
            console.log(error);
            return false;
        }
    }

    function loginUser() {
        //push user to database
        const user_obj = {
            name: user.name,
            todoItems: undefined,
            notifications:undefined,
            categories: undefined,
            settings: undefined
        }
        
            
        makePostCallUser(user_obj).then(result => {
            if(result.status === 201){
                const data = result.data;
                navigate("/app", {state: data});
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