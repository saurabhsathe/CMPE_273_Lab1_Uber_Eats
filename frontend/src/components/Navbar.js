import React from 'react'
import Searchbar from './dashboard/Searchbar'
import Vegnonvegoption from './dashboard/Vegnonvegoption'
import Location from './dashboard/Location' 
import SideBar from './userdashboard/SideBar'
const Navbar = () => {
    function sidehandle(e){
        document.getElementById("sidebar").classList.toggle("active")
    }
    
    
    return (
        <div class="wrapper">
            
            
            <nav className="navbar navbar-expand-lg fixed-top navbar-inner" >
        <div className="container-fluid navcontainer row" >
        <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={sidehandle}>
                <i class="fas fa-align-left"></i>
                <span style={{color:"red"}}>Toggle Sidebar</span>
        </button>
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
        <script>
        
        </script>
        </div>
    )
}

export default Navbar
