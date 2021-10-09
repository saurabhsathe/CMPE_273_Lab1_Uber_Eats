import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import {selectuser} from '../../features/user_slice'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const RestoCard = (props) => {
    
    const user = useSelector(selectuser)
    let redirectvar = null
    let [restos_received,setrestos]=useState([])
    const [cookies, setCookie] = useCookies(["customer"]);
    
    function addToFavourite(){

        var headers = new Headers(); 
        const data = {
            email:cookies.email,
            resteraunt_name:props.resteraunt_name,
            zipcode:props.zipcode
        }
        console.log(data)
     axios.post("http://localhost:3001/addTofavourites",data).then(response=>{
             
             if(response.status === 200)
             {
                 
                 alert("Added the restaurant as a favourite")
                 
             }
             else if(response.status === 202)
             {
                alert("could not add the restaurant")
             }

     })
    


    

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
            
            <Link to={{pathname:"/userdash/restoprofile",state:{resto:props.resto}}} ><button type="button" class="btn btn-dark" >View Menu</button></Link>
            &nbsp;&nbsp;<button type="button" class="btn btn-dark" onClick={addToFavourite} >Add to favourite</button>
                </div>
        </div>
        </div>
        
    )
}

export default RestoCard
