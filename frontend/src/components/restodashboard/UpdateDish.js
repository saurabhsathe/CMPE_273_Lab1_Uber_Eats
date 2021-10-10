import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import cookie from 'react-cookies'
import Cookies from 'universal-cookie'
import { useCookies } from "react-cookie";
import {Redirect} from 'react-router-dom';
const UpdateDish = (props) => {
   
    const [inserted, setinserted] = useState(false);
    const [cookies, setCookie] = useCookies(["restaurant"]);
    const [dish_name,setdish_name] = useState(props.location.state.resto.dish_name);
    const [dish_desc,setdish_desc] = useState(props.location.state.resto.dish_desc);
    const [dish_price,setdish_price] = useState(props.location.state.resto.price);
    const [dp,setudishdp] = useState();
    const [errors,seterrors]=useState();
    console.log("here are the props",props)
    function handleUpdate(e){
        var headers = new Headers();
        
        e.preventDefault();
        const data = {
            dish_name:dish_name,
            id:props.location.state.resto.id,
            dish_desc:props.location.state.resto.dish_desc,
            price:dish_price
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        
        axios.post('http://localhost:3001/updateDish',data)
            .then(response => {
                
                if(response.status === 200){
                    console.log("updated dish")
                    
                    setinserted(true)
                    }else if(response.status === 202){
                    
                    
                    console.log("could not update")

                    
                }
            });
            
    };
    let redirectvar=null;
    if (inserted==true){
        redirectvar = <Redirect to="/restodash" />
    }
    return (
        <div>
            {redirectvar}
            <div className="register-form" style={{marginTop:"80px"}}>
           <h2><b>Update Dish</b></h2>
           <form onSubmit={handleUpdate} enctype="multipart/form-data">
              <div className="form-group">
                    <label>Name of the dish</label>
                    <input type="text" value={dish_name}  id="dish_name" className="form-control" placeholder="Enter the dish name" onChange={e => setdish_name(e.target.value)} required/>
                 </div>
                 <div className="form-group">
                    <label>Add a description </label>
                    <input type="text" value={dish_desc} id="dish_desc" className="form-control" placeholder="Add dish description" onChange={e => setdish_desc(e.target.value)} required/>
                 </div>
        


                 <div className="form-group">
                    <label>Add a price</label>
                    <input type="number" id="dish_price" value={dish_price} className="form-control" placeholder="Your dish price please" onChange={e => setdish_price(e.target.value)} required/>
                 </div>
        
                 
                 
                
                 <h4 style={{color:"red"}}>{errors}</h4>

                 <button type="submit" className="btn btn-dark">update</button>
                 
              </form>
           </div>
        </div>
    )
}

export default UpdateDish