import React from 'react'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
const PastOrders = () => {
    let redirectVar = null;
    
    
    if(!cookie.load('cookie')){
        redirectVar = <Redirect to= "/userlogin"/>
    }
    
    return (
        <div>
            {redirectVar}
            <div id="services" className="container">
   <h2 className="display-4 text-center mt-5 mb-3">Past Orders</h2>
            <div className="row text-center">
      <div className="col-md-4 mb-4">
         <div className="card h-100">
            <img className="card-img-top" src="s3://ubereatscustomerimagesbucket/sathe.suryakant.50.png" alt="Design" />
            <div className="card-body">
               <h4 className="card-title">Design</h4>
               <p className="card-text">Deliver the best user experience 
               with our carefully designed responsive websites and applications!</p>
            </div>
            <div className="card-footer py-4">
               <a href="#" className="btn btn-secondary">See portfolio &raquo;</a>
            </div>
         </div>
      </div>
      </div>
      </div>
        </div>
    )
}

export default PastOrders
