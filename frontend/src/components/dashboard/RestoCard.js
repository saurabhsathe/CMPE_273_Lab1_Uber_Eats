import React from 'react'
import {Redirect, Link} from 'react-router-dom'
const RestoCard = (props) => {
    let redirectvar=null
    function viewMenu(resto){
        console.log("clicked")
        redirectvar=<Redirect to={{
            pathname: '/restoProfile',
            resto:resto
        }}  />
    }
    return (
        <div className="col-md-4 mb-4" >
        {redirectvar}
        <div className="card h-100" >
            <img className="card-img-top" style={{width: "100%",height: "15vw", objectFit: "cover"}} src = {props.restdp} alt="Design" />
            <div className="card-body">
            <h4 className="card-title">{props.resteraunt_name}</h4>
            <p className="card-text">{props.address}</p>
            <p><b style={{color:"black"}}>{props.zipcode}</b></p>
            </div>
            <div className="card-footer py-4">
            
            <Link to={{pathname:"/main/restoProfile",state:{resto:props.resto}}} ><button type="button" class="btn btn-dark" >View Menu</button></Link>
                </div>
        </div>
        </div>
        
    )
}

export default RestoCard
