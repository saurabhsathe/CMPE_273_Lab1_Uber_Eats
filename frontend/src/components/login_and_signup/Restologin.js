import React,{useState} from 'react'
import {login} from '../../features/user_slice'
import axios from 'axios';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Cookies from 'universal-cookie' 
import {selectuser} from '../../features/user_slice'
import {Redirect} from 'react-router';
import { useCookies } from "react-cookie";

const Restologin = () => {
    const [cookies, setCookie] = useCookies(["restaurant"]);
    const [uemail,setuemail]=useState()
    const [upwd,setpassword]=useState()
    const [usertype,setusertype]=useState()
    let [errors,seterrors]=useState()
    const dispatch = useDispatch()



    function handleLogin(e){
        var headers = new Headers();
        //prevent page from refresh
        
        e.preventDefault();
        const data = {
            email : uemail,
            password : upwd,
            usertype:"restaurant_owner"
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/customerlogin',data)
            .then(response => {
                
                if(response.status === 200){
                    dispatch(login({
                        email:uemail,
                        userType:"restaurant_owner"
                    }))
                    let restodata = response.data
                    console.log("here is restodata", restodata)
                    setCookie("resteraunt_name", restodata.resteraunt_name, {path: "/"});
                    setCookie("zipcode", restodata.zipcode, {path: "/"});
                    }else{
                    
                    seterrors("User does not exists or Invalid credentials")


                    
                }
            });
            





        
      
    }
    const user = useSelector(selectuser)

    let redirectVar = null;
        
    if(user){
        redirectVar = <Redirect to="/restodash"/>
        }
    
    
    return (
        <div>
            {redirectVar}
        <div className="login-form">
            <h2><b> Resteraunt Owner Login</b></h2>
               <p>{errors}</p>
               <form onSubmit={handleLogin}>
               <div className="form-group">
                     <label>Email</label>
                     <input id="uemail" value={uemail} type="email" className="form-control" placeholder="Registered Email id" onChange={e => setuemail(e.target.value)} />
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" value={upwd} id="pwd" className="form-control" placeholder="Password" onChange={e => setpassword(e.target.value)} />
                  </div>

                  
                  
                  <br/>

                  <button type="submit" className="btn btn-black" >Login</button>&nbsp; 
                  Dont have an account yet? <Link to="/restosignup">    
                  <button className="btn btn-dark" >Register</button>&nbsp;</Link>&nbsp;
               </form>
            
        </div></div>
    )
}

export default Restologin
