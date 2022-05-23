import React, {useState} from 'react'
import CenterBody from './Center-body/CenterBody';
import Header from './Header/Header'
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import './MyApp.css'

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');

var SQLiteStore = require('connect-sqlite3')(session);


const PLANNER_VIEW_TYPE = 2;
var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
  }));
  app.use(passport.authenticate('session'));


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