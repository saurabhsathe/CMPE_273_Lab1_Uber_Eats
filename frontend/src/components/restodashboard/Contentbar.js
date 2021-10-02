import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Customers from './Customer'
import Userinfo from './Userinfo'
import Dishes from './Dishes'
const Contentbar = () => {
    return (
            <BrowserRouter><Switch>
            <Route path='/restodash' component={Dishes} />
            <Route path='/restodash/customers' component={Customers} />
            <Route path='/userinfo' component={Userinfo} />
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
