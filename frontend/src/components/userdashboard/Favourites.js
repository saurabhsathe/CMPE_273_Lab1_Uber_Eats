import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import RestoCard from './RestoCard'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import {selectuser} from '../../features/user_slice'
import {useSelector,useDispatch} from 'react-redux'

const Favourites = (props) => {
    const user = useSelector(selectuser)
    let redirectVar = null
    let [restos_received,setrestos]=useState([])
    const [cookies, setCookie] = useCookies(["customer"]);
    console.log(user)
    useEffect(()=>{
        
             var headers = new Headers(); 
           const data = {
               email:cookies.email
           }
  
        axios.post("http://localhost:3001/getfavourites",data).then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log(response.data,typeof response.data)
                    setrestos(response.data[0])
                    console.log("got the restaurants",restos_received)
                    
                }
                else if(response.status === 202)
                {
                    console.log("no data found")
                }

        })
       
   
  
    



},[]);
  
if(!cookie.load('cookie')){
    redirectVar = <Redirect to= "/userlogin"/>
}
let details_received= restos_received.map((resto,index) => {
    return(
     
    <RestoCard
    resto={resto}  
    restdp={resto.restdp} 
    resteraunt_name ={resto.resteraunt_name}
    address={resto.address}
    zipcode={resto.zipcode}

    />

    )
})


    return (


        
            <div id="services" className="container">
            {redirectVar}
   <h2 className="display-4 text-center mt-5 mb-3">Restaurants</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
    )
    
    
}

export default Favourites