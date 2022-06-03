import React, {useEffect, useState} from 'react';

import CenterBody from '../Center-body/CenterBody';
import Header from '../Header/Header';
import Leftbar from '../Leftbar/Leftbar';
import Rightbar from '../Rightbar/Rightbar';

import './Home.css';

const PLANNER_VIEW_TYPE = 2;

function Home(props) {
    const [centerView, setView] = useState(
        {
            viewType: PLANNER_VIEW_TYPE,
            categoryType: null,
        }
     );

    function changeHomeViewState(centerView){
        setView(
            {viewType: centerView.viewType, categoryType: centerView.categoryType}
        );
    }

    useEffect(() => {
        props.fetchAllTODO().then(result => {
            if(result){
                props.setTodos(result);
            }
        });

        props.fetchAllCategories().then(result => {
            if(result){
                props.setCategories(result);
            }
        });

    }, [] );

    return (
        <div key="myapp" className="myapp">
            <Header handleCenterView={changeHomeViewState} handlePageView={props.handlePageView}/>
            <div className="row g-0">
                <div key="leftbar" className="col-md-2">
                    <Leftbar handleCenterView={changeHomeViewState} categoryData={props.categories}/>
                </div>
                <div key="centerbody" className="col-md-6">
                    <CenterBody 
                        viewState={centerView} 
                        todoData={props.todos} 
                        categoryData={props.categories} 
                        updateCategories={props.updateListCategories} 
                        addTodoItem={props.addTodoItem}
                        getDatedTodos={props.getDatedTodos}
                        getSettings={props.getSettings}
                        addNewCategory={props.addNewCategory}
                        getAllCategories={props.fetchAllCategorires}
                        getCompletedTodos={props.getCompletedTodos}/>
                </div>
                <div key="rightbar" className="col-md-4">
                    <Rightbar todoData={props.todos} deleteTODO={props.removeOneTODO}/>
                </div>
            </div>
        </div>
    );
}

export default Home;