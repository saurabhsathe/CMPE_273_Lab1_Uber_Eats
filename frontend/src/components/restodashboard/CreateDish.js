import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import cookie from 'react-cookies'
import Cookies from 'universal-cookie'
import { useCookies } from "react-cookie";
import {Redirect} from 'react-router-dom';
const CreateDish = () => {
   
    const [inserted, setinserted] = useState(false);
    const [cookies, setCookie] = useCookies(["restaurant"]);
    const [dish_name,setdish_name] = useState();
    const [dish_desc,setdish_desc] = useState();
    const [dish_price,setdish_price] = useState();
    const [dp,setudishdp] = useState();
    const [errors,seterrors]=useState();
    function handleAddDish(e){
        var headers = new Headers();
    
        e.preventDefault();
        const data = {
            dish_name:dish_name,
            resteraunt_name:cookies.resteraunt_name,
            zipcode:cookies.zipcode,
            dish_desc:dish_desc,
            dish_price:dish_price
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        var formData=new FormData()
        formData.append("data", JSON.stringify(data));
        formData.append("dp", dp);
        
        
        axios.post('http://localhost:3001/addDish',formData)
            .then(response => {
                
                if(response.status === 200){
                    console.log("added dish")
                    
                    setinserted(true)
                    }else if(response.status === 202){
                    
                    


                    
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
           <h2><b>Add a dish</b></h2>
           <form onSubmit={handleAddDish} enctype="multipart/form-data">
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
        
                 
                 
                 <div className="form-group">
                    <label>Upload Dish Picture</label><br />
                    <input type="file" id="dp" name="dp" onChange={e => setudishdp(e.target.files[0])} accept=".png,.gif,.jpeg,.jpg" />
                 </div>
                 <h4 style={{color:"red"}}>{errors}</h4>

                 <button type="submit" className="btn btn-dark">Add Dish</button>
                 
              </form>
           </div>
        </div>
    )
}

export default CreateDish
