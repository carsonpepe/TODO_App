import React, {useEffect, useState} from 'react';
import './Settings.css';

function Settings(props){
    const [settings, changeSettings] = useState(
        {
            deletionPeriod: "",
            theme: false,
        }
    );
    //const settings = props.getSettings();
    const theme = settings["theme"];

    useEffect(() => {
        props.getSettings().then(result => {
            if(result){
                changeSettings(result.body);
            }
        });
    }, [] ); 

    return (
        
        <div className="settings">
            <div className="settings-content">
                <p>Light/Dark Mode:</p>
                <label class="switch">
                    <input type="checkbox" value={settings.theme}/>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        
    );

}

export default Settings;