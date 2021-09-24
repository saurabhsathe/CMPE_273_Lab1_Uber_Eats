import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Userdash from './userdashboard/Userdash'
import Resteraunts from './userdashboard/Resteraunts'
import Userinfo from './userdashboard/Userinfo'
import MainLoginForm from './login_and_signup/MainLoginForm'
import LoginForm from './login_and_signup/LoginForm'
import MainSignupForm from './login_and_signup/MainSignupForm'
import Navbar from './Navbar'
//Create a Main Component
import MainLayout from './MainLayout'
import {BrowserRouter as Router,Switch} from "react-router-dom";
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" component={Navbar} />
                <Route path="/login" component={MainLoginForm} />
                <Route path="/signup" component={MainSignupForm} />
                
                <Route path="/home" component={Userdash} />
                <Route path="/resteraunts" component={Resteraunts} />
                <Route path="/user" component={Userinfo} />
                </div>
                


        )
    }
}
//Export The Main Component
export default Main;