import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {selectuser} from '../../features/user_slice'
import {Redirect} from 'react-router';
const UpdateProfile = () => {

    const [uaddr,setuaddr] = useState();
    const [uzip,setuzip] = useState();
    const [ucontact,setucontact] = useState();
    const [udp,setudp] = useState();
    const [errors,seterrors]=useState();
    const user = useSelector(selectuser)
    

    let redirectVar=null
    
       
        useEffect(()=>{
           console.log(user.user)
         const data = {
            email:user.user.email
        }
           let tok =localStorage.getItem("token")
         axios.defaults.headers.common['authorization'] = tok;
         axios.post(process.env.REACT_APP_BACKEND+"getcustdetails",data).then(response=>{
            
            if(response.status === 200)
            {
                
                console.log(response.data,typeof response.data)
                setuaddr(response.data.address)
                setuzip(response.data.zipcode)           
                setucontact(response.data.contact)
            }
            else if(response.status === 202)
            {
                console.log("no data found")
            }
 
    })
        },[]);
        
       function handleUpdate(){
           
       }

       if(localStorage.getItem("token")==null){
         redirectVar = <Redirect to= "/restologin"/>
     }
    return (
        <div>
        {redirectVar}
            
           <div className="register-form" style={{marginTop:"80px"}}>
           <h2><b>Update Profile</b></h2>
           <form onSubmit={handleUpdate} enctype="multipart/form-data">
              <div className="form-group">
                    <label>Address</label>
                    <input type="text" value={uaddr}  id="uaddr" className="form-control" placeholder="Address" onChange={e => setuaddr(e.target.value)} required/>
                 </div>
                 <div className="form-group">
                    <label>Zipcode</label>
                    <input type="text" value={uzip} pattern="[0-9]{5}" id="uzip" className="form-control" placeholder="Address" onChange={e => setuzip(e.target.value)} required/>
                 </div>
        


                 <div className="form-group">
                    <label>Contact No.</label>
                    <input type="tel" id="ucontact" value={ucontact} className="form-control" placeholder="Your contact number please" onChange={e => setucontact(e.target.value)} required/>
                 </div>
        
                 
                 
                 
                 <h4 style={{color:"red"}}>{errors}</h4>

                 <button type="submit" className="btn btn-dark">Update</button>
                 
              </form>
           </div>
           </div>
    )
}

export default UpdateProfile
