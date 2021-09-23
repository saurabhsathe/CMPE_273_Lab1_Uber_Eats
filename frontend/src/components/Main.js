import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Userdash from './userdashboard/Userdash'
import Resteraunts from './userdashboard/Resteraunts'
import Userinfo from './userdashboard/Userinfo'
import Usersidepanel from './userdashboard/Usersidepanel'
import SidePanel from './userdashboard/SidePanel'
//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={SidePanel} />
                <Route path="/home" component={Userdash} />
                <Route path="/resteraunts" component={Resteraunts} />
                <Route path="/user" component={Userinfo} />
               
            </div>
        )
    }
}
//Export The Main Component
export default Main;