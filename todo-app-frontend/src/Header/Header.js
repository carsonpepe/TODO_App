import React, {useState} from 'react'
import './Header.css'
import add from '../resources/images/add.png'
import settings from '../resources/images/settings.png'
import logo from '../resources/images/dodo.jpg'

const SETTINGS_VIEW_TYPE = 0;
const ADD_VIEW_TYPE = 1;

const CREDENTIALS_PAGE_STATE = 0;

function Header(props){

    function handleButtonPress(event){
        const {value, name} = event.currentTarget;
        if (name == "center"){
            props.handleCenterView({viewType: value, categoryType: null});
        }
        else {
            props.handlePageView(value);
        }
        
    }


    return (
        <div className="header">
            <div className="header_contents">
                <h1>DODO Pro</h1>
                <img className='logo' src={logo} alt="logo" width="44" height="50"/>
                <div className="header_button">
                    <input type="image" src={add} alt="add" width="35" height="35" value={ADD_VIEW_TYPE} name="center" onClick={handleButtonPress}></input>
                </div>
                <div className="header_button">
                    <input type="image" src={settings} alt="settings" width="35" height="35" value={SETTINGS_VIEW_TYPE} name="center" onClick={handleButtonPress}></input>
                </div>
                <div>
                    <button className="logout button-59_" value={CREDENTIALS_PAGE_STATE} name="page" onClick={handleButtonPress}>Logout</button>
                </div>
             

            </div>

        </div>
    );

}
export default Header;
