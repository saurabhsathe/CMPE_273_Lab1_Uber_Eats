import React from 'react'

const CurrentOrderCard = (props) => {
    function cancelOrder(){

    }
    
    return (
 
        <div className="col-md-4 mb-4" >
        <div className="card h-100" >
      
            <div className="card-body" id={props.order.id}>
            <p><b style={{color:"black"}}>{props.order.restaurant_name}</b></p>
            <p><b style={{color:"black"}}>Zipcode:{props.order.restaurant_zipcode}</b></p>
 
            <p><b style={{color:"black"}}>Amount:{props.order.amount}$</b></p>
            <p><b style={{color:"black"}}>Date:{props.order.order_date}</b></p>
            <p><b style={{color:"black"}}>Status:{props.order.order_status}</b></p>
            <p><b style={{color:"black"}}>Delivery Address:{props.order.delivery_address}</b></p>
            </div>
            <div className="card-footer py-4">
            
            <button type="button" class="btn btn-dark" onClick={cancelOrder}>Cancel Order</button>
            
                </div>
        </div>
        </div>
    )
}

export default CurrentOrderCard
