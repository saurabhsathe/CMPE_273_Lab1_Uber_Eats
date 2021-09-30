import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Resteraunts from './Resteraunts'
import Userinfo from './Userinfo'

const Contentbar = () => {
    return (
            <BrowserRouter><Switch>
            <Route path='/' component={Resteraunts} />
            <Route path='/userdash/resteraunts' component={Resteraunts} />
            <Route path='/userinfo' component={Userinfo} />
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
