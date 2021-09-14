import React from 'react'
import {Container, Form,Row, Col, Image} from 'react-bootstrap'
const MainLoginForm = () => {
    return (
        <div>


            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link href="/css/login_page.css" rel="stylesheet" id="bootstrap-css-custom"></link>
<div className="sidenav">
         <div className="login-main-text">
            
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
         <Image src="/uber_eats.png/3600*1800" thumbnail />
            <div className="login-form">
            
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" />
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-black">Login</button>
                  <button type="submit" className="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
      </div>


    </div>
    )
}

export default MainLoginForm
