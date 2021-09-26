import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../features/user_slice'
import axios from 'axios';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom'

const Restologin = () => {
    
    const [uname,setusername]=useState()
    const [upwd,setpassword]=useState()
    const [usertype,setusertype]=useState()
    let [errors,seterrors]=useState()
    const dispatch = useDispatch()



    function handleLogin(e){
        var headers = new Headers();
        //prevent page from refresh
        alert(usertype)
        e.preventDefault();
        const data = {
            username : uname,
            password : upwd,
            usertype:usertype
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/login',data)
            .then(response => {
                
                if(response.status === 200){
                    dispatch(login({
                        username:uname,
                        
                    }))

                    }else{
                    
                    seterrors("User does not exists or Invalid credentials")


                    
                }
            });
            if(!cookie.load('cookie')){
               seterrors("not set cookies ")
            }





        
      
    }

    
    return (
        <div className="login-form">
            <h2><b> Resteraunt Owner Login</b></h2>
               <p>{errors}</p>
               <form onSubmit={handleLogin}>
                  <div className="form-group">
                     <label>User Name</label>
                     <input id="uname" value={uname} type="text" className="form-control" placeholder="User Name" onChange={e => setusername(e.target.value)} />
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
            
        </div>
    )
}

export default Restologin
