import React from 'react'
import './side.css'
import DashNavbar from '../dashboard/DashNavbar'
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import "./side.css"
import "./user.css"

const SideBar = () => {

    let contentbar = null
    function setcontentbar(val){
    }
    
    return (
       
            <nav id="usersidebar" >

                

        <ul class="list-unstyled components">
            
            <li >
                <a href="/home" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                
            </li>
            <li >
                <a href="/userdash/resteraunts" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Resto</a>
                
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                
            </li>
            <li >
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                
            </li>
            <li >
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                
            </li>
            <li><button classname="btn btn-dark" onClick={setcontentbar("/login")}>Login</button></li>
                 </ul>
        
            </nav>
            
            
            
            
            
            
        
    )
}

export default SideBar
