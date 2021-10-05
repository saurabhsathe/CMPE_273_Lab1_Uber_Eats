import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Resteraunts from './Resteraunts'
import UpdateProfile from './UpdateProfile'
import Userinfo from './Userinfo'
import PastOrder from './PastOrders'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'

const Contentbar = () => {

    let redirectVar = null;
    
    
    if(!cookie.load('cookie')){
        redirectVar = <Redirect to= "/userlogin"/>
    }
    return (
            <BrowserRouter>
            
            <Switch>
            
            <Route exact path='/userdash/' component={Resteraunts} />
            
            <Route path="/userdash/userupdate" component={UpdateProfile} />
            <Route path='/userdash/userinfo' component={Userinfo} />
            <Route path="/userdash/pastorders" component={PastOrder} />
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
