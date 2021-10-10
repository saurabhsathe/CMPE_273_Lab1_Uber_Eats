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
    const [filters,setfilter]=useState({})
    function filterRestos(filters){
        console.log("these are the filters",filters)
        let radio_filtered=[]
        let name_filtered=[]
        let zip_filtered=[]
        let final=[]
        
        if(filters.radioval.radioval!='all'){
            console.log("here")
            console.log(filters.radioval)
            radio_filtered = original_restos.filter(resto => resto.pickup_drop === filters.radioval)
            final=radio_filtered 
        }
        else{
            radio_filtered=original_restos
            final=radio_filtered 
        }
        if(filters.restzip.restzip.length!=0 & filters.restzip.restzip.length==5){
            console.log("in the restzip",restzip)
            zip_filtered = radio_filtered.filter(resto => resto.zipcode === filters.restzip.restzip)
            final=zip_filtered 
        }
        
        console.log("restname is ",restname.length)
        if(filters.restname.restname.length!=0){
            name_filtered = zip_filtered.filter(resto => resto.resteraunt_name === filters.restname.restname)
            final=name_filtered 
        }
          
         
        console.log("filtered_list by radio",radio_filtered)
        console.log("filtered_list by zip",zip_filtered)
        console.log("filtered_list by name",name_filtered)
        console.log(final)
        console.log("props received2",props)
        setrestos_rcvd(final)
        
    }



    
    useEffect(()=>{

{


    var headers = new Headers(); 
    const data = {
            resteraunt_name:"dasdsadsa"
        }
        
     axios.post("http://localhost:3001/getallResto",data).then(response=>{
             
             if(response.status === 200)
             {
                 
                 //console.log(response.data,typeof response.data)
                 //console.log("herhehrehrhehrehrehh")
                 var headers = new Headers(); 
                 setoriginal_restos(response.data[0])
                setrestos_rcvd(response.data[0])
                //console.log("props received1",props)
                filterRestos(props.filters);

                 //console.log("got the restaurants",response.data[0])
                 
             }
             else if(response.status === 202)
             {
                 //console.log("no data found")
             }

     })
    
       
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


