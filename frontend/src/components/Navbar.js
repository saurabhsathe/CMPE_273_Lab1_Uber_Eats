import React from 'react'
import Searchbar from './dashboard/Searchbar'
import Vegnonvegoption from './dashboard/Vegnonvegoption'
import Location from './dashboard/Location' 
import SideBar from './userdashboard/SideBar'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import './dashboard/vegnonveg.css'
const Navbar = () => {
    function sidehandle(e){
        document.getElementById("sidebar").classList.toggle("active")
    }
    
    
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
