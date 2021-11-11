import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";

import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import {selectuser} from '../../features/user_slice'

import NewOrderCard from './NewOrderCard'

import {getOrders} from '../../features/resto_slice'
import {useSelector,useDispatch} from 'react-redux'
import Pagination from './Pagination'

const Current_Orders = (props) => {
    const user = useSelector(selectuser)
    let redirectVar = null
    let [orders_received,setorders]=useState([])
    const [cookies, setCookie] = useCookies(["restaurant"]);
   
    const [updated,setupdated]=useState()
    const [radioval2,setradioval2]=useState("all")
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    
    const dispatch=useDispatch()
    useEffect(()=>{
        
             var headers = new Headers(); 
              const data = {
            restaurant_name:cookies.resteraunt_name,
            zipcode:cookies.zipcode,
            order_type:"all"
    
           }
           
           async function get_orders(data) {
            let mydishes = await dispatch(getOrders(data))
            
            setorders(mydishes.payload)
 
          }
          get_orders(data)
       
   
  
    



},[updated]);

function getOrdersByType(ordertype){

    
    var headers = new Headers(); 
    const data = {
  restaurant_name:cookies.resteraunt_name,
  zipcode:cookies.zipcode,
  order_type:ordertype

 }
 console.log("the data--------------------------->",data,ordertype)
 console.log("Order type--------------------------->",ordertype)
  async function get_orders(data) {
    let myorders = await dispatch(getOrders(data))
  
    setorders(myorders.payload)
    setupdated(true)
  }
  get_orders(data)
  }



  if(localStorage.getItem("token")==null){
    redirectVar = <Redirect to= "/restologin"/>
}

console.log(orders_received.length)
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginate = pageNumber => setCurrentPage(pageNumber);
let details_received= orders_received.slice(indexOfFirstPost, indexOfLastPost).map((order,index) => {
    return(
     
    <NewOrderCard
    
   order={order}
    
    />

    )
})


    return (


        
            <div id="services" className="container">
            {redirectVar}
           
            
   <h2 className="display-4 text-center mt-5 mb-3">My Orders</h2>
   <b>Filter by Order type</b>&nbsp;
   <div className="mainradio " data-toggle="buttons">
    
    <input type="radio" value="all" onChange={e=>{setradioval2(e.target.value);getOrdersByType(e.target.value)}} className="radio_button" id="all" name="options2" defaultChecked/>
    <label for="all" className="radio_label">All</label>

   <input type="radio" className="radio_button" value="current" onChange={e=>{setradioval2(e.target.value);getOrdersByType(e.target.value)}} id="current" name="options2"  />
   <label for="current" className="radio_label"> New</label>

    <input type="radio" className="radio_button" value="past" onChange={e=>{setradioval2(e.target.value);getOrdersByType(e.target.value)}} id="past" name="options2" /> 
    <label for="past" className="radio_label">Past</label>

      </div> 
      <hr />
   <div className="row text-center">
      {details_received}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={orders_received.length}
        paginate={paginate}
      />




    </div>
    


</div>
    )
    
    
}

export default Current_Orders
