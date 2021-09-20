import React,{useState} from 'react'

const SignupForm = () => {
    const [uname,setuname] = useState();
    const [uaddr,setaddr] = useState();
    const [uzip,setzip] = useState();
    const [ucontact,setcontact] = useState();
    const [upass,setpass] = useState();
    const [uemail,setemail] = useState();
    const [ucpass,setcpass] = useState();

    function handleRegister(e){
        console.log("in the register user")
    }

    return (
        
         
         
            <div className="login-form">
            <h2><b>Login or Signup</b></h2>
               <form onSubmit={handleRegister}>
                  <div className="form-group">
                     <label>Name</label>
                     <input type="text" id="uname" className="form-control" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group">
                     <label>Address</label>
                     <input type="text" id="uaddr" className="form-control" placeholder="Address" required/>
                  </div>
                  <div className="form-group">
                     <label>Zipcode</label>
                     <input type="text" pattern="[0-9]{5}" id="uzip" className="form-control" placeholder="Address" required/>
                  </div>
         


                  <div className="form-group">
                     <label>Contact No.</label>
                     <input type="tel" id="ucontact" className="form-control" placeholder="Your contact number please" required/>
                  </div>
         
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" id="uemail" className="form-control" placeholder="Your email address" required/>
                  </div>
                  
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" id="upwd" className="form-control" placeholder="Password" required/>
                  </div>

                <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" id="ucpwd" className="form-control" placeholder="Password" required/>
                  </div>


                  <button type="submit" className="btn btn-secondary">Register</button>
               </form>
            </div>
         
    )
}

export default SignupForm
         