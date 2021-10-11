import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import RestoCard from './RestoCard'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import {selectuser} from '../../features/user_slice'
import {useSelector,useDispatch} from 'react-redux'
import CurrentOrderCard from './CurrentOrderCard'
const Current_Orders = (props) => {
    const user = useSelector(selectuser)
    let redirectVar = null
    const [orders_received,set_curr_orders]=useState([])
    const [cookies, setCookie] = useCookies(["customer"]);
    console.log(user)
    useEffect(()=>{
        
             var headers = new Headers(); 
           const data = {
               email:cookies.email,
               order_type:"current"
               
           }
  
        axios.post("http://54.176.82.69:3001/getCustOrders",data).then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log("--------------------here is the response in current",response.data)
                    set_curr_orders(response.data[0])
                  
                    
                }
                else if(response.status === 202)
                {
                    console.log("no data found")
                }

        })
       
   
  
    



},[]);
  console.log("In the current orders")
if(!cookie.load('cookie')){
    redirectVar = <Redirect to= "/userlogin"/>
}
console.log(orders_received)
let details_received= orders_received.map((order,index) => {
    return(
     
    <CurrentOrderCard
    
   order={order}
    
    />

    )
})


    return (


        
            <div id="services" className="container">
            {redirectVar}
   <h2 className="display-4 text-center mt-5 mb-3">Current Orders</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
    )
    
    
}

export default Current_Orders
