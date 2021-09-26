import React from 'react'
import {Link} from 'react-router-dom'
const RestoSignup = () => {
    function handleRegister(e){
        console.log("in the register register resteraunt")
    }

    
    return (
        <div>
            <div className="register-form sticktop">
            <h2><b>New Business </b></h2>
               <form onSubmit={handleRegister}>
                  <div className="form-group">
                     <label>Owner Name</label>
                     <input type="text" id="oname" className="form-control" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group">
                     <label>Owner Address</label>
                     <input type="text" id="oaddr" className="form-control" placeholder="Address" required/>
                  </div>
                  <div className="form-group">
                     <label>Owner Zipcode</label>
                     <input type="text" pattern="[0-9]{5}" id="ozip" className="form-control" placeholder="Address" required/>
                  </div>
         


                  <div className="form-group">
                     <label>Owner Contact No.</label>
                     <input type="tel" id="ocontact" className="form-control" placeholder="Your contact number please" required/>
                  </div>
         
                  <div className="form-group">
                     <label>Owner Email</label>
                     <input type="email" id="oemail" className="form-control" placeholder="Your email address" required/>
                  </div>
                  
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" id="opwd" className="form-control" placeholder="Password" required/>
                  </div>

                <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" id="ucpwd" className="form-control" placeholder="Password" required/>
                  </div>
                <hr />
                <h2><b>Resteraunt details</b></h2>
                <hr />

                <div className="form-group">
                     <label>Resteraunt Name</label>
                     <input type="text" id="restname" className="form-control" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group">
                     <label>Resteraunt Address</label>
                     <input type="text" id="restaddr" className="form-control" placeholder="Address" required/>
                  </div>
                  <div className="form-group">
                     <label>Resteraunt Zipcode</label>
                     <input type="text" pattern="[0-9]{5}" id="restzip" className="form-control" placeholder="Zipcode" required/>
                  </div>
         


                  
                    

                  <button type="submit" className="btn btn-secondary">Register</button>
                  Already have an account? <Link to="/restologin">Login</Link>&nbsp;
               </form>
            </div>
        </div>
    )
}

export default RestoSignup
