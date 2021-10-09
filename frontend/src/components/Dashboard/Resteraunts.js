import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import RestoCard from './RestoCard'

const Resteraunts = (props) => {
    
    let [restos_received,setrestos]=useState([])
    const [cookies, setCookie] = useCookies(["restaurant"]);

    useEffect(()=>{
        if(Object.keys(props).length == 0){
        console.log("herhehrehrhehrehrehh")
             var headers = new Headers(); 
           const data = {
               resteraunt_name:"dasdsadsa"
           }
  
        axios.post("http://localhost:3001/getallResto",data).then(response=>{
                
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
       
    }
    else{
        console.log("got some props");
    }



},[]);
  

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
            
   <h2 className="display-4 text-center mt-5 mb-3">Resteraunts</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
    )
}

export default Resteraunts
