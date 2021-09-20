import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../features/user_slice'
const LoginForm = () => {

    const [uname,setusername]=useState()
    const [upwd,setpassword]=useState()
    const [errors,seterrors]=useState()
    const dispatch = useDispatch()

    function handleLogin(e){
        e.preventDefault()
        
        dispatch(login({
            username:uname,
            password:upwd
        }))
      
    }
    function handleRegister(e){
        
    }
    
    return (
        <div className="login-form">
            <h2><b>Login</b></h2>
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

                  
                  <div className="form-group">
                    <label><input type="radio" name="usertype" defaultChecked/>User</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" name="usertype" /> Restaurant</label>
                  </div>

                  <button type="submit" className="btn btn-black" >Login</button>&nbsp;     
                  <button type="submit" className="btn btn-blue" onClick={handleRegister}>Register</button>&nbsp;
               </form>
            </div>
    )
}

export default LoginForm
