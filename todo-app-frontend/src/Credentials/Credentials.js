import React from "react";

import './Credentials.css';

const LOGIN_PAGE_STATE = 1;
const SIGN_UP_PAGE_STATE = 2;

function Credentials(props){

    function handleButtonPress(event){
        const {value, name} = event.currentTarget;
        props.handlePageView({pageState: value, userID: name});
    }

    console.log("running credentials");

    return (
        <div className='credentials'>
            <h1>Welcome to DODO Pro</h1>
            <form className='form-style-9'>
                <ul>
                    <li>
                        <button className='button-login' name="login" value={LOGIN_PAGE_STATE} onClick={handleButtonPress}>Login</button> 
                    </li>
                    <li>
                        <button className='button-signUp' name="signup" value={SIGN_UP_PAGE_STATE} onClick={handleButtonPress}>Sign Up</button> 
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Credentials;
