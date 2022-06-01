import React from 'react';
import Login from './Login/Login';
import SignUp from './Sign-up/SignUp'

import './Credentials.css'

const LOGIN_PAGE_STATE = 1;
const SIGN_UP_PAGE_STATE = 2;

function Credentials(props) {

    function handleButtonPress(event){
        const {value, name} = event.currentTarget;
        props.handlePageView({pageState: value, userID: name});
    }

    return (
        <div className='credentials'>
            <h1>Welcome to DODO Pro</h1>
            <form className='form-style-9'>
                <ul>
                    <li>
                        <button className='button-login' value={LOGIN_PAGE_STATE} name="" onClick={handleButtonPress}>Login</button> 
                    </li>
                    <li>
                        <button className='button-signUp' value={SIGN_UP_PAGE_STATE} name="" onClick={handleButtonPress}>Sign Up</button> 
                    </li>
                </ul>
            </form>
        </div>
    );
    
}

export default Credentials;