import React from 'react'
import {FaBars} from 'react-icons/fa'
const Navbar = (props) => {
    function sidehandle(e){
        document.getElementById("sidebar").classList.toggle("active")
    }
    
    
    return (
        <div class="wrapper">
            
            <div id="sidenav">
            
            <nav className="navbar navbar-expand-lg fixed-top navbar-inner" >
        
        <div className="container-fluid navcontainer row" >
        
         
            <div className="col-sm brand" >
            <a className="navbar-brand"><img style={{border:0}} src="/ue2.png" /></a>
            
            </div>
            <div className="col-sm">    
            </div>
            
                
            
            <div className="col-sm">    
            </div>
            
            <div className="col-sm">
            </div>

            
           
            
        
        
        </div>
        
    </nav>
    </div>
        


        </div>
    )
}

export default Navbar
