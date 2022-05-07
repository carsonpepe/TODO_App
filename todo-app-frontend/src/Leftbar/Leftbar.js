import React, {useState} from 'react'
import './Leftbar.css'

const CATEGORY_VIEW_TYPE = 3;
const PLANNER_VIEW_TYPE = 2;

function Leftbar(props){
    const [centerView, setView] = useState(
        {
            viewType: null,
            categoryType: null,
        }
     );

    function handleButtonPress(event){
        const {value, name} = event.currentTarget;
        setView(
            {viewType: value, categoryType: name}
        );
        props.handleCenterView(centerView);
        
    }

    function LeftbarBody(props){
   

        const categories = props.catList.map((row, index) => {
            
            if(row.color){
                return (
                    <button className="button-59" style={{backgroundColor: row.color}} value={CATEGORY_VIEW_TYPE} name={row.name} onClick={handleButtonPress}>{row.name}</button>
                );
            }
            return (
                
                <button  className="button-59">{row.name} value={CATEGORY_VIEW_TYPE} name={row.name} onClick={handleButtonPress}</button>
               
            );
        });
    
        return (
            <div>
                <button className="button-59" value={PLANNER_VIEW_TYPE} name={null} onClick={handleButtonPress}>Planner</button>
                {categories}
            </div>
        );
    
        
    }


    return (
        
        <div className="leftbar">

            <div className="leftbar_header">
                <p>View Categories</p>
            </div>
            <LeftbarBody catList={props.catList}/>
        </div>
        
    );

}



// function LeftbarBody(props){
   

//     const categories = props.catList.map((row, index) => {
        
//         if(row.color){
//             return (
//                 <button role="button" className="button-59" style={{backgroundColor: row.color}} onClick={handleButtonPress(props, CATEGORY_VIEW_TYPE, row.name)}>{row.name}</button>
//             );
//         }
//         return (
            
//             <button role="button" className="button-59">{row.name} onClick={handleButtonPress(props, CATEGORY_VIEW_TYPE, row.name)}</button>
           
//         );
//     });

//     return (
//         <div>
//             <button type="button" className="button-59" onClick={handleButtonPress(props, PLANNER_VIEW_TYPE, null)}>Planner</button>
//             {categories}
//         </div>
//     );

    
// }

export default Leftbar;