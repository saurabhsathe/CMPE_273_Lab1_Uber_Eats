import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'

const CurrentOrderCard = (props) => {
    let redirectvar=null
    const [updated,setupdated]=useState(false)
const [btnstat,setbtn]=useState("visible")
const [dropbtn,setdrop]=useState('')
    function updateOrder(type){
        let data={
            id:props.order.id,
            status:dropbtn
        }

        axios.post(process.env.REACT_APP_BACKEND+'updateOrder',data)
            .then(response => {
                if(response.status === 200){
                    console.log("updated")
                    setupdated(true)
                    }else if(response.status === 202){
                    
                    


                    
                }
            });
            
    };

    
    if(updated==true){
        redirectvar=<Redirect to="/restodash" />
    }
    console.log(dropbtn)
    
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
            
            
            &nbsp; &nbsp;
            <div class="dropdown">
      <div class="dropdown-select">
        
        <i class="fa fa-caret-down icon"></i>
      </div>
      <select class="dropdown-list" onChange={(e)=>{setdrop(e.target.value)}}>
        <option class="dropdown-list__item" key="received" value="received">Received</option>
        <option class="dropdown-list__item" key="preparing" value="preparing" >Preparing</option>
        <option class="dropdown-list__item" key="on the way"  value="on the way" >On the way</option>
        <option class="dropdown-list__item" key="ready"  value="ready">Pickup ready</option>
        <option class="dropdown-list__item" key="pickedup"  value="pickedup">Pickedup</option>
        <option class="dropdown-list__item" key="cancelled"  value="cancelled">Cancelled</option>
      </select>
    </div>
    <button type="button" class="btn btn-dark" onClick={()=>{updateOrder("preparing")}} style={{visibility:props.order.order_status!="completed" || props.order.order_status!="cancelled" || props.order.order_status!="delivered" || props.order.order_status!="delivered" ? "hidden" : "picked up"}}>Update</button>
                </div>
        </div>
        </div>
    )
}

export default CurrentOrderCard
