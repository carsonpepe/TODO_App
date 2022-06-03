import React, {useState} from 'react';

import './SignUp.css';

function SignUp(props) {
    const [newUser, setNewUser] = useState(
        {
            name: "",
            todoItems: undefined,
            notifications: undefined,
            categories: undefined,
            settings: undefined,
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") {
            setNewUser(
                {
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
        props.submitNewUser(newUser);
        setNewUser(
            {
                name: "",
                todoItems: undefined,
                notifications: undefined,
                categories: undefined,
                settings: undefined,
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