import React from 'react'
import {Redirect} from 'react-router-dom'
const PastOrderCard = (props) => {
    let redirectvar=null



    
    return (
 
        <div className="col-md-4 mb-4" >
        {redirectvar}
        <div className="card h-100" >
      
            <div className="card-body" id={props.order.id}>
            <p><b style={{color:"black"}}>{props.order.restaurant_name}</b></p>
            <p><b style={{color:"black"}}>Zipcode:{props.order.restaurant_zipcode}</b></p>
 
            <p><b style={{color:"black"}}>Amount:{props.order.amount}$</b></p>
            <p><b style={{color:"black"}}>Date:{props.order.order_date}</b></p>
            <p><b style={{color:"black"}}>Status:{props.order.order_status}</b></p>
            <p><b style={{color:"black"}}>Delivery Address:{props.order.delivery_address}</b></p>
            </div>

        </div>
        </div>
    )
}

export default PastOrderCard
