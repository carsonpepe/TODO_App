import React, {useState} from 'react'
import CenterBody from './Center-body/CenterBody';
import Header from './Header/Header'
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import './MyApp.css'


const PLANNER_VIEW_TYPE = 2;


function MyApp(){

    const [centerView, setView] = useState(
        {
            viewType: PLANNER_VIEW_TYPE,
            categoryType: null,
        }
     );
    
    function changeViewState(centerView){
        setView(
            {viewType: centerView.viewType, categoryType: centerView.categoryType}
        );
    }
    


    return (
        <div key="myapp" className="myapp">
            <Header handleCenterView={changeViewState}/>
            <div className="row g-0">
                <div key="leftbar" className="col-md-2">
                    <Leftbar handleCenterView={changeViewState}/>
                </div>
                <div key="centerbody" className="col-md-6">
                    <CenterBody viewState={centerView}/>
                </div>
                <div key="rightbar" className="col-md-4">
                    <Rightbar/>
                </div>
            </div>
        </div>
    );

}
export default MyApp;