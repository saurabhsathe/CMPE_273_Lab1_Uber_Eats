import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Customers from './Customer'
import Userinfo from './Userinfo'
import Dishes from './Dishes'
import CreateDish from './CreateDish'
import UpdateOwner from './UpdateOwner'
const Contentbar = () => {
    return (
            <BrowserRouter><Switch>
            <Route exact path='/restodash' component={Dishes} />
            <Route path='/restodash/customers' component={Customers} />
            <Route path='/userinfo' component={Userinfo} />
            <Route path="/restodash/createdish" component={CreateDish} />
            <Route path="/restodash/updateowner" component={UpdateOwner} />
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
