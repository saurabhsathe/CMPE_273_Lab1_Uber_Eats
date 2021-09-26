import React from 'react'
import {Link} from 'react-router-dom'
const RestoSignup = () => {
    const [oname,setoname] = useState();
    const [oaddr,setoaddr] = useState();
    const [ozip,setozip] = useState();
    const [ocontact,setocontact] = useState();
    const [opwd,setopwd] = useState();
    const [oemail,setoemail] = useState();
    const [ocpwd,setocpwd] = useState();
    const [restdp,setrestdp] = useState();
    const [restname,setrestname] = useState();
    const [restaddr,setrestaddr] = useState();
    const [restzip,setrestzip] = useState();
    
    
    
    
    
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
                     <input type="text" id="oname" className="form-control" placeholder="Your Name" value={oname} onChange={e=>setoname(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                     <label>Owner Address</label>
                     <input type="text" id="oaddr" className="form-control" value={oaddr} onChange={e=>setoaddr(e.target.value)} placeholder="Address" required/>
                  </div>
                  <div className="form-group">
                     <label>Owner Zipcode</label>
                     <input type="text" pattern="[0-9]{5}" id="ozip" className="form-control" value={ozip} onChange={e=>setozip(e.target.value)} placeholder="Address" required/>
                  </div>
         


                  <div className="form-group">
                     <label>Owner Contact No.</label>
                     <input type="tel" id="ocontact" className="form-control" value={ocontact} onChange={e=>setocontact(e.target.value)} placeholder="Your contact number please" required/>
                  </div>
         
                  <div className="form-group">
                     <label>Owner Email</label>
                     <input type="email" id="oemail" className="form-control" value={oemail} onChange={e=>setoemail(e.target.value)} placeholder="Your email address" required/>
                  </div>
                  
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" id="opwd" className="form-control" value={opwd} onChange={e=>setopwd(e.target.value)} placeholder="Password" required/>
                  </div>

                <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" id="ocpwd" className="form-control" value={ocpwd} onChange={e=>setocpwd(e.target.value)} placeholder="Password" required/>
                  </div>
                <hr />
                <h2><b>Resteraunt details</b></h2>
                <hr />

                <div className="form-group">
                     <label>Resteraunt Name</label>
                     <input type="text" id="restname" className="form-control" value={restname} onChange={e=>setrestname(e.target.value)} placeholder="Your Name" required/>
                  </div>
                  <div className="form-group">
                     <label>Resteraunt Address</label>
                     <input type="text" id="restaddr" className="form-control" value={restaddr} onChange={e=>setrestaddr(e.target.value)} placeholder="Address" required/>
                  </div>
                  <div className="form-group">
                     <label>Resteraunt Zipcode</label>
                     <input type="text" pattern="[0-9]{5}" id="restzip" className="form-control" value={restzip} onChange={e=>setrestzip(e.target.value)} placeholder="Zipcode" required/>
                  </div>
         
                  <div className="form-group">
                     <label>Upload Resteraunt Picture</label>
                     <input type="file" id="restdp" name="restdp" value={restdp} onChange={e => setrestdp(e.target.value)}  accept="image/x-png,image/gif,image/jpeg" />
                  </div>

                  
                    

                  <button type="submit" className="btn btn-secondary">Register</button>
                  Already have an account? <Link to="/restologin">Login</Link>&nbsp;
               </form>
            </div>
        </div>
    )
}

export default RestoSignup
