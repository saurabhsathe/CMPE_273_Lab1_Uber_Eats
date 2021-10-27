import React from 'react'
import {useCart} from 'react-use-cart'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";

import {Redirect} from 'react-router-dom'
const Checkout = () => {
    
    const [addr_update,setaddr_update]=useState(true)
    const [cookies, setCookie] = useCookies(["customer"]);
    const [addr,setaddr]=useState()
    let redirectVar = null;
    const [inserted,setinserted]=useState(false)
    useEffect(()=>{
        
        var headers = new Headers(); 
      const data = {
          email:cookies.email
      }

   axios.post(process.env.REACT_APP_BACKEND+"getaddress",data).then(response=>{
           
           if(response.status === 200)
           {
               
               console.log(response.data,typeof response.data)
               setaddr(response.data)               
               
           }
           else if(response.status === 202)
           {
               console.log("no data found")
           }

   })
  






},[]);
    
    
    
const {
    isEmpty,
    items,
    cartTotal,
    emptyCart

} = useCart();

    
    
    function placeOrder(){
        let data={
            customer_email:cookies.email,
            restaurant_name:items[0].resteraunt_name,
            restaurant_zipcode:items[0].zipcode,
            amount:cartTotal,
            delivery_address:addr,
            order_status:"placed",
            
        }
        
        axios.post(process.env.REACT_APP_BACKEND+"placeOrder",data).then(response=>{
             
             if(response.status === 200)
             {
                 console.log()
                
                setinserted(true)
                 
             }
             else if(response.status === 202)
             {
                
             }
             
     })
    




    }
    

    if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>
    
    if(inserted==true){
        console.log("added successfully")
        emptyCart()
        redirectVar = <Redirect to= "/userdash/success"/>
    }
    return (<div>
        {redirectVar}
        <section className="py-4 container">
            <div className="row justify-content-center">
                <h4>Order Details</h4>
                <table className="table table-light table-hover m-0">
                <thead>
                             <tr>
                                     <td><b>Dish Name</b></td>
                                     <td><b>Price</b></td>
                                     <td><b>Quantity</b></td>
                                     <td><b>Total Cost</b></td>
                                     
                                    
                                     <td><b>Resteraunt Name</b></td>
                                     <td><b>Resteraunt zipcode</b></td>
                                        
                             </tr>
                         </thead>
                    <tbody>
                         
                        {
                            
                            items.map((item)=>{
                                return(
                                <tr>
                                    
                                  
                                    <td>{String(item.dish_name).trim()}</td>
                                     <td>{item.price}$</td>
                                     <td>{item.quantity}</td>
                                        
                                          
                                            <td>{item.quantity*item.price}$</td>
                                            <td>{item.resteraunt_name}</td>
                                            <td>{item.zipcode}</td>
                                        
                                  
                                    
                                    
                                  

                                </tr>)
                            })
                        }
                        
                        
                    </tbody>
                </table>
                <hr />
                <h4>Total Amount {cartTotal}$</h4>
                <hr />
                <h4>Delivery Address</h4>
                <textarea name="address" value={addr} onChange={e => setaddr(e.target.value)} rows="10" cols="30" disabled={addr_update}>{addr}</textarea>    
                <button className="btn btn-dark" onClick={()=>{setaddr_update(!addr_update)} } style={{width:"30%"}}>Update Address</button>
               
                <button className = "btn btn-dark" onClick={()=>placeOrder()} style={{width:"30%"}} >Confirm and Place order</button>
                
                                        <button  className = "btn btn-dark"  onClick={()=>emptyCart()} style={{width:"30%"}}>EmptyCart</button>
         
            </div>
        </section>
        </div>
    )}

export default Checkout
