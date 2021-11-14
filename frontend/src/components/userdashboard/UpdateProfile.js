import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {selectuser} from '../../features/user_slice'
import {Redirect} from 'react-router';

import {updateUser} from '../../features/user_slice'
const UpdateProfile = () => {

    const [uaddr,setuaddr] = useState();
    const [uzip,setuzip] = useState();
    const [ucontact,setucontact] = useState();
    const[userid,setuserid]=useState('')
    const [udp,setudp] = useState();
    const [ucity,setucity] = useState();
    const [updated,setupdated] = useState();
    const [errors,seterrors]=useState();
    const user = useSelector(selectuser)
    const dispatch=useDispatch()
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
                setuserid(response.data._id)
                setuaddr(response.data.address)
                setuzip(response.data.zipcode)           
                setucontact(response.data.contact)
                setucity(response.data.city)
            }
            else if(response.status === 202)
            {
                console.log("no data found")
            }
 
    })
        },[]);
        
       function handleUpdate(){
          console.log("here----------------------------------->")
          alert("here")
         let data={
            _id:userid,
            address:uaddr,
            zipcode:uzip,
            contact:ucontact,
            city:ucity,
            user_type:"customer"
         }
        
         console.log("here int the update------------------->")
        async function update(data) {
            await dispatch(updateUser(data))
            setupdated(!updated)
            alert("user details updated ")
          
          }
          update(data)
            
    

           
       }

       if(localStorage.getItem("token")==null){
         redirectVar = <Redirect to= "/userdash"/>
     }
     
    return (
        <div>
        {redirectVar}
            
           <div className="register-form" style={{marginTop:"80px"}}>
           <h2><b>Update Profile</b></h2>
           <form >
              <div className="form-group">
                    <label>Address</label>
                    <input type="text" value={uaddr}  id="uaddr" className="form-control" placeholder="Address" onChange={e => setuaddr(e.target.value)} required/>
                 </div>
                 <div className="form-group">
                    <label>Zipcode</label>
                    <input type="text" value={uzip} pattern="[0-9]{5}" id="uzip" className="form-control" placeholder="Address" onChange={e => setuzip(e.target.value)} required/>
                 </div>
                 <div className="form-group">
                     <label>City</label>
                     <input type="" value={ucity}  id="ucity" className="form-control" placeholder="City" onChange={e => setucity(e.target.value)} required/>
                  </div>
        


                 <div className="form-group">
                    <label>Contact No.</label>
                    <input type="tel" id="ucontact" value={ucontact} className="form-control" placeholder="Your contact number please" onChange={e => setucontact(e.target.value)} required/>
                 </div>
        
                 
                 
                 
                 <h4 style={{color:"red"}}>{errors}</h4>

                 <button type="submit" onClick={handleUpdate} className="btn btn-dark">Update</button>
                 
              </form>
           </div>
           </div>
    )
}

export default UpdateProfile
