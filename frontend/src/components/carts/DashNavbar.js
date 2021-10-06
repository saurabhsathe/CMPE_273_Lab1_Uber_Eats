import React from 'react'

const Navbar = () => {
 
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
            
        
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar
