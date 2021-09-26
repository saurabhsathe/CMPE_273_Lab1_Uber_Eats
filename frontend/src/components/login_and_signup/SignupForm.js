import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const SignupForm = () => {
    const [uname,setuname] = useState();
    const [uaddr,setaddr] = useState();
    const [uzip,setzip] = useState();
    const [ucontact,setcontact] = useState();
    const [upwd,setupwd] = useState();
    const [uemail,setemail] = useState();
    const [ucpwd,setucpwd] = useState();
    const [udp,setdp] = useState();
    function handleRegister(e){
        console.log("in the register user")
    }

    return (
        
         
         
            <div className="register-form sticktop">
            <h2><b>Customer Registration</b></h2>
               <form onSubmit={handleRegister}>
                  <div className="form-group">
                     <label>Name</label>
                     <input type="text" value={uname} id="uname" className="form-control" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group">
                     <label>Address</label>
                     <input type="text" value={uaddr} id="uaddr" className="form-control" placeholder="Address" required/>
                  </div>
                  <div className="form-group">
                     <label>Zipcode</label>
                     <input type="text" value={uzip} pattern="[0-9]{5}" id="uzip" className="form-control" placeholder="Address" required/>
                  </div>
         


                  <div className="form-group">
                     <label>Contact No.</label>
                     <input type="tel" id="ucontact" value={ucontact} className="form-control" placeholder="Your contact number please" required/>
                  </div>
         
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" id="uemail" value={uemail} className="form-control" placeholder="Your email address" required/>
                  </div>
                  
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" id="upwd" value={upwd} className="form-control" placeholder="Password" required/>
                  </div>

                <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" id="ucpwd" value={ucpwd} className="form-control" placeholder="Password" required/>
                  </div>
                
                  <div className="form-group">
                     <label>Upload Profile Picture</label>
                     <input type="file" id="dp" name="dp" value={udp} accept="image/x-png,image/gif,image/jpeg" />
                  </div>


                  <button type="submit" className="btn btn-secondary">Register</button>
                  Already have an account? <Link to="/userlogin">Login</Link>&nbsp;
               </form>
            </div>
         
    )
}

export default SignupForm
         