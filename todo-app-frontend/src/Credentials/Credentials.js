import React from "react";
import './Credentials.css';
import {
    useNavigate
} from "react-router-dom";

export default function Credentials(){
    const navigate = useNavigate();

    function nav(event){
        const { name } = event.target;
        if (name === 'login'){
            navigate("/login")
        }else{
            navigate("/signup")
        }
    }

    return (
        <div className='credentials'>
            <h1>Welcome to DODO Pro</h1>
            <form className='form-style-9'>
                <ul>
                    <li>
                        <button className='button-login' name="login" onClick={nav}>Login</button> 
                    </li>
                    <li>
                        <button className='button-signUp' name="signup" onClick={nav}>Sign Up</button> 
                    </li>
                </ul>
            </form>
        </div>
    );
}