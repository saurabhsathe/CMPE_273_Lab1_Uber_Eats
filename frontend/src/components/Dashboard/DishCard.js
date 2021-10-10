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
            <h4 className="card-title">{props.dish_name}</h4>
            <p className="card-text">{props.dish_desc}</p>
            <p><b style={{color:"black"}}>{props.price}$</b></p>
            </div>
            <div className="card-footer py-4">
            
            <button type="button" class="btn btn-dark" onClick={()=>addItem(props.dish,1)}>Add to cart</button>
                </div>
        </div>
        </div>
    )
}

export default DishCard