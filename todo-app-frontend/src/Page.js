import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import MyApp from './MyApp';
import Login from "./Login/Login";
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup/Signup";
import Credentials from "./Credentials/Credentials";


export default function Page() {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<div className="box"><Credentials/></div>}/>
                    <Route path="/login" element={<div className="box"><Login/></div>}/>
                    <Route path="/signup" element={<div className="box"><Signup/></div>}/>
                    <Route path="/app" element={<div className="box"><MyApp/></div>}/>
                </Routes>
            </div>
        </Router>
    );

}