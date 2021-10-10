import React, {Component}  from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Navbar_Resto from './Navbar_Resto'
import cookie from 'react-cookies'
import { useCookies } from "react-cookie";
import RestoCard from './RestoCard'
import {Redirect} from 'react-router-dom'
const Resteraunts = (props) => {
    let redirectVar=null
    const [original_restos,setoriginal_restos]=useState([])
    let [restos_received,setrestos_rcvd]=useState([])
    const [checkbtn,setcheckbtn] = useState(false)
    const [radioval,setradioval]=useState("all")
    const [restname,setrestname]=useState("")
    const [restzip,setrestzip]=useState("")

    function filterRestos(e){
        e.preventDefault()
      
        let radio_filtered=[]
        let name_filtered=[]
        let zip_filtered=[]
        let final=[]        
        if(radioval!="all"){
            radio_filtered = props.orestos.filter(resto => resto.pickup_drop === radioval)
            final=radio_filtered 
        }
        else{
            radio_filtered=props.orestos
            final=radio_filtered 
        }
        if(restzip.length!="" & restzip.length==5){
            console.log("in the restzip",restzip)
            zip_filtered = radio_filtered.filter(resto => resto.zipcode === restzip)
            final=zip_filtered 
        }
        
        console.log("restname is ",restname.length)
        if(restname.length!=0){
            console.log("in the restname",restname)
            name_filtered = zip_filtered.filter(resto => resto.resteraunt_name === restname)
            final=name_filtered 
        }
          
         
        console.log("filtered_list by radio",radio_filtered)
        console.log("filtered_list by zip",zip_filtered)
        console.log("filtered_list by name",name_filtered)
        console.log(final)
        props.setrestos(final)
        
    }



    
    useEffect(()=>{

{
        console.log("herhehrehrhehrehrehh")
             var headers = new Headers(); 
           const data = {
               resteraunt_name:"dasdsadsa"
           }
           setrestos_rcvd(props.restos)
       
    }
    



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


            <div>

                 <div>
            


        </div>
            <div id="services" className="container">
            
            
   <h2 className="display-4 text-center mt-5 mb-3">Resteraunts</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
</div>

    )
}

export default Resteraunts


