import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Resteraunts from './Resteraunts'
import UpdateProfile from './UpdateProfile'
import Userinfo from './Userinfo'
import PastOrder from './PastOrders'
const Contentbar = () => {
    return (
            <BrowserRouter><Switch>
            <Route exact path='/userdash/' component={Resteraunts} />
            <Route path='/resteraunts' component={Resteraunts} />
            <Route path="/userdash/userupdate" component={UpdateProfile} />
            <Route path='/userdash/userinfo' component={Userinfo} />
            <Route path="/userdash/pastorders" component={PastOrder} />
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
