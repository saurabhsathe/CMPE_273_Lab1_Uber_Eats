import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../features/user_slice'
import axios from 'axios';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom'
//import {Redirect} from 'react-router';
const LoginForm = () => {

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
            usertype:"customer"
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/customerlogin',data)
            .then(response => {
                
                if(response.status === 200){
                    alert("successfull login")
                    dispatch(login({
                        email:uemail,
                        userType:usertype
                        
                    }))

                    }else{
                    
                    seterrors("User does not exists or Invalid credentials")


                    
                }
            });
            if(!cookie.load('cookie')){
               seterrors("not set cookies ")
            }





        
      
    }
    function handleRegister(e){
        
    }
    
    return (
        <div className="login-form" >
            <h2><b>Customer Login</b></h2>
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
                  Dont have an account yet? <Link to="/usersignup">    
                  <button className="btn btn-dark" >Register</button>&nbsp;</Link>&nbsp;
               </form>
            </div>
    )
}

export default LoginForm
