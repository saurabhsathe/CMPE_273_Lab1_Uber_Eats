import React from 'react'
import Searchbar from './Searchbar'
import Vegnonvegoption from './Vegnonvegoption'
import Location from './Location' 
import './vegnonveg.css'
const Navbar = () => {
    
    
    return (
        <div class="wrapper">
            
            <div id="sidenav">
            <nav className="navbar navbar-expand-lg fixed-top navbar-inner" >
        <div className="container-fluid navcontainer row" >
        
        <form id="search-form" class="form-inline" role="form" method="post">
        
            <div className="col-sm brand" >
            <a className="navbar-brand"><img style={{border:0}} src="/ue2.png" /></a>
            
            </div>
            <div className="col-sm">    
                <Location />
            </div>
            
                
            
            <div className="col-sm">    
                <Vegnonvegoption />
            </div>
            
            <div className="col-sm">
            <Searchbar />
            </div>

            
           
            </form>
            
        
        
        </div>
        
    </nav>
    </div>
        


        </div>
    )
}

export default Navbar
