import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import cookie from 'react-cookies';

const SignupForm = () => {
    const [uname,setuname] = useState();
    const [uaddr,setuaddr] = useState();
    const [uzip,setuzip] = useState();
    const [ucontact,setucontact] = useState();
    const [upwd,setupwd] = useState();
    const [uemail,setuemail] = useState();
    const [ucpwd,setucpwd] = useState();
    const [udp,setudp] = useState();
    const [usertype,setusertype] = "customer";
    const [errors,seterrors]=useState();
    
    function handleRegister(e){
        var headers = new Headers();
        //prevent page from refresh
       
        e.preventDefault();
        const data = {
            fullname : uname,
            address:uaddr,
            zipcode:uzip,
            contact:ucontact,
            password : upwd,
            email:uemail,
            usertype:"customer"
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        var formData=new FormData()
        formData.append("data", JSON.stringify(data));
        formData.append("dp", udp);
        console.log(formData)
        
        axios.post('http://localhost:3001/usersignup',formData)
            .then(response => {
                
                if(response.status === 200){
                   console.log("received response that server has received the file")

                    }else if(response.status === 202){
                    
                    seterrors("user already exists")


                    
                }
            });
            if(!cookie.load('cookie')){
               seterrors("not set cookies ")
            }
    }

    return (
        
         
         
            <div className="register-form">
            <h2><b>Customer Registration</b></h2>
               <form onSubmit={handleRegister} enctype="multipart/form-data">
                  <div className="form-group">
                     <label>Name</label>
                     <input type="text" value={uname} id="uname" className="form-control" placeholder="Your Name" onChange={e => setuname(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                     <label>Address</label>
                     <input type="text" value={uaddr} id="uaddr" className="form-control" placeholder="Address" onChange={e => setuaddr(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                     <label>Zipcode</label>
                     <input type="text" value={uzip} pattern="[0-9]{5}" id="uzip" className="form-control" placeholder="Address" onChange={e => setuzip(e.target.value)} required/>
                  </div>
         


                  <div className="form-group">
                     <label>Contact No.</label>
                     <input type="tel" id="ucontact" value={ucontact} className="form-control" placeholder="Your contact number please" onChange={e => setucontact(e.target.value)} required/>
                  </div>
         
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" id="uemail" value={uemail} className="form-control" placeholder="Your email address" onChange={e => setuemail(e.target.value)} required/>
                  </div>
                  
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" id="upwd" value={upwd} className="form-control" onChange={e => setupwd(e.target.value)} placeholder="Password" required/>
                  </div>

                <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" id="ucpwd" value={ucpwd} className="form-control" onChange={e => setucpwd(e.target.value)} placeholder="Password" required/>
                  </div>
                
                  <div className="form-group">
                     <label>Upload Profile Picture</label><br />
                     <input type="file" id="dp" name="dp" onChange={e => setudp(e.target.files[0])} accept=".png,.gif,.jpeg,.jpg" />
                  </div>


                  <button type="submit" className="btn btn-dark">Register</button>
                  <br />
                  Already have an account? <Link to="/userlogin">Login</Link>&nbsp;
               </form>
            </div>
         
    )
}

export default SignupForm
         