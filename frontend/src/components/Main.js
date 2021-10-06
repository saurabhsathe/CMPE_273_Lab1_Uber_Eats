import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Userdash from './userdashboard/Userdash'
import Resteraunts from './userdashboard/Resteraunts'
import Userinfo from './userdashboard/Userinfo'
import MainLoginForm from './login_and_signup/MainLoginForm'
import MainSignupForm from './login_and_signup/MainSignupForm'
//import Dashboard from './dashboard/Dashboard'
import Dashboard from './carts/Dashboard'
import RestoMainLogin from './login_and_signup/RestoMainLogin'
import RestoMainSignup from './login_and_signup/RestoMainSignup'
import Restodash from './restodashboard/Restodash'
import CreateDish from './restodashboard/CreateDish'

//Create a Main Component
import MainLayout from './MainLayout'
import {BrowserRouter as Router,Switch} from "react-router-dom";
class Main extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={Dashboard} />
                
                <Route path="/userlogin" component={MainLoginForm} />
                <Route path="/usersignup" component={MainSignupForm} />
                <Route path="/restologin" component={RestoMainLogin} />
                <Route path="/restosignup" component={RestoMainSignup} />
                <Route path = "/userdash" component={Userdash} />
                <Route path="/home" component={Userdash} />
               
                <Route path="/resteraunts" component={Resteraunts} />
                <Route path="/user" component={Userinfo} />
                <Route path="/userdash/home" component={Resteraunts} />
                <Route path="/restodash" component={Restodash} />
                </div>
                


        )
    }
}
//Export The Main Component
export default Main;