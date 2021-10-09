import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Userdash from './userdashboard/Userdash'
import Resteraunts from './userdashboard/Resteraunts'
import Userinfo from './userdashboard/Userinfo'
import MainLoginForm from './login_and_signup/MainLoginForm'
import MainSignupForm from './login_and_signup/MainSignupForm'
//import Dashboard from './dashboard/Dashboard'
import Dashboard from './dashboard/Dashboard'
import RestoMainLogin from './login_and_signup/RestoMainLogin'
import RestoMainSignup from './login_and_signup/RestoMainSignup'
import Restodash from './restodashboard/Restodash'
import RestoMenu from './dashboard/RestoMenu'
class Main extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/main" component={Dashboard} />
                
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
                <Route path="/main/restoProfile" component={RestoMenu} />
                </div>
                


        )
    }
}
//Export The Main Component
export default Main;