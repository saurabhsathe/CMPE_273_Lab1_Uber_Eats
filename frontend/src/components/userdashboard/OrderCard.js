import React from 'react'
import {useCart} from 'react-use-cart' 
const DishCard = (props) => {

    const {addItem} = useCart();
    return (
 
        <div className="col-md-4 mb-4" id={props.id}>
        <div className="card h-100" id={props.dish_id}>
            <img className="card-img-top" style={{width: "100%",
            height: "15vw",
            objectFit: "cover"}} src = {props.dishdp} alt="Design" />
            <div className="card-body">
            <h4 className="card-title">{props.restaurant_name}</h4>
            <p className="card-text">{props.restaurant_zipcode}</p>
            <p><b style={{color:"black"}}>Amount:{props.amount}$</b></p>
            <p><b style={{color:"black"}}>Date:{props.order_date}</b></p>
            <p><b style={{color:"black"}}>Status:{props.order_status}</b></p>
            <p><b style={{color:"black"}}>Delivery Address:{props.delivery_address}</b></p>
            </div>
            <div className="card-footer py-4">
            
            <button type="button" class="btn btn-dark" onClick={()=>addItem(props.dish,1)}>Add to cart</button>
            &nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-dark" onClick={()=>addItem(props.dish,1)}>Add to Favourites</button>
                </div>
        </div>
        </div>
    )
}

export default DishCard
