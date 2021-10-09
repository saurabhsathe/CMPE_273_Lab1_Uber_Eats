import React from 'react'
import {useCart} from 'react-use-cart'

const Checkout = () => {

    function placeOrder(){
        if(isEmpty){
            alert("Cart is empty!!Please add some thing in your card")
        }
        else{
            
        }
    }
    const {
        isEmpty,
        items,
        cartTotal,
        emptyCart

    } = useCart();


    if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>

    return (
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
                <h4>Total Amount {cartTotal}$</h4>
                             
                <button className = "btn btn-dark" style={{width:"30%"}} onClick={()=>placeOrder()}>Confirm and Place order</button>
                                        &nbsp;<button  className = "btn btn-dark" style={{width:"30%"}} onClick={()=>emptyCart()}>EmptyCart</button>
         
            </div>
        </section>
    )}

export default Checkout
