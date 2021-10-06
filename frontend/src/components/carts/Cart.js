import React from 'react'
import {useCart} from 'react-use-cart'
const Cart = () => {

    const {
        isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <h4>Cart has {totalUniqueItems} totalItems :({totalItems})</h4>
                <table className="table table-light table-hover m-0">
                    <tbody>
                         
                        {
                            
                            items.map((item)=>{
                                return(
                                <tr>
                                    <td>
                                        <img src={item.dishdp} style={{height:"6rem"}} />
                                        
                                    </td>
                                    <td>
                                        {item.dish_name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {item.quantity}
                                    </td>

                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Cart
