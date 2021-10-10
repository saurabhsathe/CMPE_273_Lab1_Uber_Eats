import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Customers from './Customer'
import Userinfo from './Userinfo'
import Dishes from './Dishes'
import CreateDish from './CreateDish'
import UpdateOwner from './UpdateOwner'
import Current_Orders from './Current_Orders'
import PastOrders from './PastOrders'
import UpdateDish from './UpdateDish'
const Contentbar = () => {
    return (
            <BrowserRouter><Switch>
            <Route exact path='/restodash' component={Dishes} />
            <Route path='/restodash/customers' component={Customers} />
            <Route path='/userinfo' component={Userinfo} />
            <Route path="/restodash/createdish" component={CreateDish} />
            <Route path="/restodash/updateowner" component={UpdateOwner} />
            <Route path="/restodash/current" component={Current_Orders} />
            <Route path="/restodash/pastorders" component={PastOrders} />
            <Route path="/restodash/updateDish" component={UpdateDish} />
            
            </Switch></BrowserRouter>
      
    )
}

export default Contentbar
