import React from 'react'
import {useState,useEffect} from 'react'
import Checkout from './Checkout'
import Cart from './Cart'
const Navbar = () => {
    const [checkbtn,setcheckbtn] = useState(false)
    

    return (
        <div>
            <nav id="user-nav" className="navbar navbar-expand-lg fixed-top navbar-inner" >
        <div className="container-fluid navcontainer row" >
        
        <div class="navbar-header">
                
        </div>
        <div className="collapse navbar-collapse" id="main-navbar-collapse">
        <form id="search-form" class="form-inline" role="form" method="post">
            <div className="col-sm brand" >
            <a className="navbar-brand"><img style={{border:0}} src="/ue2.png" /></a>
            
            </div>
            <div className="col-sm">    
            <div class="input-group">
        <input type="text" class="form-control location-form" placeholder="Current Location" />
        
        </div>
            </div>
            
                
            
            <div className="col-sm">    
            <div className="mainradio" data-toggle="buttons">
        
              <input type="radio" className="radio_button" id="all" name="options"/>
              <label for="all" className="radio_label">All</label>
    
             <input type="radio" className="radio_button" id="veg" name="options" defaultChecked />
             <label for="veg" className="radio_label">Veg</label>
    
              <input type="radio" className="radio_button" id="nonveg" name="options" /> 
              <label for="nonveg" className="radio_label">NonVeg</label>
    
                </div>      
            </div>
            
            <div className="col-sm">
                    <div class="input-group">
                    <input type="text" class="form-control search-form" placeholder="Enter Dish Name" />
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-dark search-btn" data-target="#search-form" name="q">
                            search
                    
		                 </button></span>
        
                    </div>
            </div>
            
            
            </form>
            <div className="col-sm input-group">
            
            </div>
            <span class="input-group-btn">
                        <button onClick={()=>setcheckbtn(true)} class="btn btn-dark" data-target="#search-form" name="q">
                            Cart
                              
		                 </button></span>
                         <Checkout trigger={checkbtn} setTrigger={setcheckbtn}>

                        <Cart />

                         </ Checkout>
        
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar
