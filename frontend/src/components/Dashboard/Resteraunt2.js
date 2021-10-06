import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";

const Resteraunt2 = (props) => {
    
    let [dishes_received,setdishes]=useState([])
    const [cookies, setCookie] = useCookies(["restaurant"]);

    
            
           
    useEffect(()=>{
        if(Object.keys(props).length == 0){
        console.log("herhehrehrhehrehrehh")
             var headers = new Headers(); 
           const data = {
                resteraunt_name:cookies.resteraunt_name,
                 zipcode:cookies.zipcode,
         
            }
  
        axios.post("http://localhost:3001/getallDishes",data).then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log(response.data,typeof response.data)
                    setdishes(response.data[0])
                    console.log("gsdfsdfds",dishes_received)
                    
                    
                }
                else if(response.status === 202)
                {
                    console.log("no data found")
                }

        })
       
    }
    else{
        console.log("got some props")
    }



},[]);
  

let details_received= dishes_received.map(dish => {
    return(
        <div className="col-md-4 mb-4" >
<div className="card h-100" id={dish.dish_id}>
    <img className="card-img-top" style={{width: "100%",
    height: "15vw",
    objectFit: "cover"}} src = {dish.dishdp} alt="Design" />
    <div className="card-body">
    <h4 className="card-title">{dish.dish_name}</h4>
    <p className="card-text">{dish.dish_desc}</p>
    <p><b style={{color:"black"}}>{dish.price}$</b></p>
    </div>
    <div className="card-footer py-4">
    
    <button type="button" class="btn btn-dark">Add to cart</button>
        </div>
</div>
</div>

    )
})


    return (


        
            <div id="services" className="container">
            
   <h2 className="display-4 text-center mt-5 mb-3">Dishes</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
    )
}

export default Resteraunt2
