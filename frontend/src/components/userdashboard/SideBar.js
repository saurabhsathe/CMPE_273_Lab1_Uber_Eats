import React from 'react'
import './side.css'
import DashNavbar from '../dashboard/DashNavbar'
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';


const SideBar = () => {

    let contentbar = null
    function setcontentbar(val){
     contentbar= <Link to={val}></Link>  
    }
    
    return (
       
            <div>
            <nav id="sidebar" >

                <div class="sidebar-header sidepanel">
            <h3 >Bootstrap Sidebar</h3>
        </div>

        <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li><button classname="btn btn-dark" onClick={setcontentbar("/login")}>Login</button></li>
        </ul>
        
            </nav>
            <div>
                {contentbar}
            </div>
            
            </div>
            
            
            
        
    )
}

export default SideBar
