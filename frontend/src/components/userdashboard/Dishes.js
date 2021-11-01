import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { useLocation, Link } from 'react-router-dom';
import DishCard from './DishCard'
const Dishes = (props) => {
    let [dishes_received,setdishes]=useState([])
    const location=useLocation()

    
            
           
    useEffect(()=>{
        if(Object.keys(props).length != 0){
        console.log("herhehrehrhehrehrehh",location.state)
             var headers = new Headers(); 
           const data = {
                resteraunt_name:location.state.resto.resteraunt_name,
                 zipcode:location.state.resto.zipcode,
         
            }
  
        axios.post(process.env.REACT_APP_BACKEND+"getDishes",data).then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log(response.data,typeof response.data)
                    setdishes(response.data)
                    console.log("gsdfsdfds",dishes_received)
                    
                    
                }
                else if(response.status === 202)
                {
                    console.log("no data found")
                }

        })
       
    }
    else{
        console.log("got NO props")
    }



},[]);
  

let details_received
console.log(dishes_received)
if(dishes_received.length>0)
{details_received = dishes_received.map((dish,index) => {
    return(
        
    <DishCard id = {dish._id} 
    key ={dish.dish_id} 
    dishdp={dish.dishdp} 
    dish_name ={dish.dish_name}
    dish_desc={dish.dish_desc}
    dish={dish}
    price = {dish.price}
    
    />

    )
})

}
else{
    details_received=<h1>No Dishes available in the menu</h1>
}
    return (


        
            <div id="services" className="container">
            
   <h2 className="display-4 text-center mt-5 mb-3">Menu Card</h2>
        
   <div className="row text-center">
      {details_received}
     <br />

    </div>
    


</div>
    )
}

export default Dishes
