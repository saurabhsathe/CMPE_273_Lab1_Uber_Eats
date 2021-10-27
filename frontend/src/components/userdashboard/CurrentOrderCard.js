import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
const CurrentOrderCard = (props) => {
    let redirectvar=null
    const [updated,setupdated]=useState(false)

    
    function CancelOrder(){
        let data={
            id:props.order._id,
            status:"cancelled"
        }
        axios.post(process.env.REACT_APP_BACKEND+'updateOrder',data)
            .then(response => {
                if(response.status === 200){
                    console.log("updated")
                    props.setupdated(true)
                    }else if(response.status === 202){
                    
                    


                    
                }
            });
            
    };

    
    if(updated==true){
        redirectvar=<Redirect to="/userdash" />
    }
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
            <div className="card-footer py-4">
            <button type="button" class="btn btn-dark"  onClick={CancelOrder} disabled={props.order.order_status=="placed"? false : true}>Cancel</button>
           
                </div>
        </div>
        </div>
    )
}

export default CurrentOrderCard
