import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Jumbo from './Jumbo'
import DashNavbar from './DashNavbar'

import { useCookies } from "react-cookie";
import RestoCard from './RestoCard'

const Resteraunts = (props) => {
    const [original_restos,setoriginal_restos]=useState([])
    let [restos_received,setrestos]=useState([])
    const [cookies, setCookie] = useCookies(["restaurant"]);

    function filter_restos(){

    }
    console.log(process.env.REACT_APP_BACKEND+"getallResto")
    useEffect(()=>{
        console.log(process.env.REACT_APP_BACKEND+"getallResto")
        if(Object.keys(props).length == 0){
        console.log("herhehrehrhehrehrehh")
             var headers = new Headers(); 
           const data = {
               
           }

        axios.get(process.env.REACT_APP_BACKEND+"getallResto").then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log(response.data,typeof response.data)
                    setoriginal_restos(response.data[0])
                    setrestos(response.data)
                    console.log("got the restaurants",restos_received)
                    
                }
                else if(response.status === 400)
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


            <div>

                 <div className="landing">
            <DashNavbar filter={filter_restos} orestos={original_restos} setrestos={setrestos} />
            <Jumbo />
            


        </div>
            <div id="services" className="container">
            
            
   <h2 className="display-4 text-center mt-5 mb-3">Restaurants</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
</div>

    )
}

export default Resteraunts
