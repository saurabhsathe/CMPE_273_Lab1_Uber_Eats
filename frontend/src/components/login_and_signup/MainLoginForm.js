import React,{useState} from 'react'
import Sidepanel from './SidePanel'
import BootCdn from './BootCdn'
const MainLoginForm = () => {
    const [uname,setusername]=useState()
    const [upwd,setpassword]=useState()

    function showsignup()
        {

    }
    function handleclick(e){
        e.preventDefault()
        alert("in the form")
        
    }


    return (
        <div>
            
      <div className="main">
        <BootCdn />
        <Sidepanel />
         <div className="col-md-6 col-sm-12">
         
            <div className="login-form">
            <h2><b>Login or Signup</b></h2>
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
                    <label><input type="radio" name="usertype" defaultChecked/>User</label>
                    <label><input type="radio" name="usertype" /> Restaurant</label>
                  </div>

                  <button type="submit" className="btn btn-black" onClick={handleclick}>Login</button>&nbsp;     
                  
               </form>
            </div>
         </div>
      </div>


    </div>
    )
}

export default MainLoginForm
