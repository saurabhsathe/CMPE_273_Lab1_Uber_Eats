import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";

import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import {selectuser} from '../../features/user_slice'
import {useSelector,useDispatch} from 'react-redux'
import CurrentOrderCard from './CurrentOrderCard'
import PastOrderCard from './PastOrderCard'
const Past_Orders = (props) => {
    const user = useSelector(selectuser)
    let redirectVar = null
    let [orders_received,setorders]=useState([])
    const [cookies, setCookie] = useCookies(["restaurant"]);
    console.log(user)
    
    useEffect(()=>{
        
        const data = {
            email:cookies.email,
            order_type:"past"
            
        }

        axios.post("http://localhost:3001/getCustOrders",data).then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log("received response here",response.data[0])
                    setorders(response.data[0])
                    
                }
                else if(response.status === 202)
                {
                    console.log("no data found")
                }

        })
       
   
  
    



},[]);
console.log(" in the past orders")  
if(!cookie.load('cookie')){
    redirectVar = <Redirect to= "/restologin"/>
}

console.log(orders_received)
let details_received= orders_received.map((order,index) => {
    return(
     
    <PastOrderCard
    
   order={order}
    
    />

    )
})


    return (


        
            <div id="services" className="container">
            {redirectVar}
   <h2 className="display-4 text-center mt-5 mb-3">Past Orders</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
    )
    
    
}

export default Past_Orders
