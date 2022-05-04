import React from 'react'
import './Header.css'
import add from '../resources/images/add.png'
import settings from '../resources/images/settings.png'

function Header(){
    return (
        <div class="header">
            <div class="header_contents">
                <h1>DODO Pro</h1>
                    <div class="header_button">
                        <input type="image" src={add} width="35" height="35"></input>
                    </div>
                    <div class="header_button">
                        <input type="image" src={settings} width="35" height="35"></input>
                    </div>
             

            </div>

        </div>
    );

}
export default Header;