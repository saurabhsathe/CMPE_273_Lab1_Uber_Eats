import React,{useState} from 'react'
import Sidepanel from './SidePanel'
import BootCdn from './BootCdn'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const MainLoginForm = () => {
    
    function getregister(e){
        document.getElementById("login_div").style.display="None"
        document.getElementById("signup_div").style.display="block"
        alert("in the register form")
       }
    function getloginform(e){
        document.getElementById("login_div").style.display="block"
        document.getElementById("signup_div").style.display="None"
        alert("in the register form")
    }

    return (
        <div>
            
      <div className="main">
        <BootCdn />
        <Sidepanel />
         <div className="col-md-6 col-sm-12" style={{display:"block"}} id="login_div">
                
                <LoginForm />        
                Dont have an account yet? <button type="submit" className="btn btn-blue" onClick={getregister}>Register</button>&nbsp;   
         </div>
         <div className="col-md-6 col-sm-12" style={{display:"None"}} id="signup_div">
                
                <SignupForm />
                Already have an account?<button type="submit" className="btn btn-black" onClick={getloginform}>Login</button>&nbsp;            
         </div>
         
      </div>


    </div>
    )
}

export default MainLoginForm
