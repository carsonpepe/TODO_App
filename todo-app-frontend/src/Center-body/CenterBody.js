import React from 'react'
import './CenterBody.css'

function CenterBody(props){



    return (
        
        <div className="centerbody">
            <p>{props.viewState.viewType}</p>
        </div>
        
    );

}

export default CenterBody;