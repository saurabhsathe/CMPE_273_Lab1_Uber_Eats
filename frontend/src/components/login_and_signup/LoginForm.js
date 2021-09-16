import React,{useState} from 'react'

const LoginForm = () => {

    const [uname,setusername]=useState()
    const [upwd,setpassword]=useState()


    function handleclick(e){
        e.preventDefault()
        alert("in the form")

    }
    
    return (
        <div className="login-form">
            <h2><b>Login</b></h2>
               <form>
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

                  <button type="submit" className="btn btn-black" onClick={handleclick}>Login</button>&nbsp;     
                  <button type="submit" className="btn btn-blue" onClick={handleclick}>Register</button>&nbsp;
               </form>
            </div>
    )
}

export default LoginForm
