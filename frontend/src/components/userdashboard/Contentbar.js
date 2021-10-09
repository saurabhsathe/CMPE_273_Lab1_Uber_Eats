import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Resteraunts from './Resteraunts'
import UpdateProfile from './UpdateProfile'
import Userinfo from './Userinfo'
import PastOrder from './PastOrders'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import Cart from './Cart'
import RestoMenu from './RestoMenu'
import {useLocation} from 'react-router-dom'
import Checkout from './Checkout'
import Favourites from './Favourites'
import Successful from './Successful'
const Contentbar = (props) => {

    let redirectVar = null;
 const location=useLocation()
    
    if(!cookie.load('cookie')){
        redirectVar = <Redirect to= "/userlogin"/>
    }

    return (
            <BrowserRouter>
            
            <Switch>
            
            <Route exact path='/userdash/' component={Resteraunts} />
            <Route path= "/userdash/cart" component={Cart} />        
            <Route path="/userdash/userupdate" component={UpdateProfile} />
            <Route path='/userdash/userinfo' component={Userinfo} />
            <Route path="/userdash/pastorders" component={PastOrder} />
            <Route path="/userdash/restoprofile" component={RestoMenu} />
            <Route path="/userdash/checkout" component={Checkout} />
            <Route path="/userdash/favourites" component={Favourites} />
            <Route path="/userdash/success" component={Successful} />
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
