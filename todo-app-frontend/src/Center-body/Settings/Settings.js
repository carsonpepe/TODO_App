import React from 'react'
import './Settings.css'

function Settings(){



    return (
        
        <div className="settings">
            <div className="settings-content">
                <p>Light/Dark Mode:</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        
    );

}

export default Settings;