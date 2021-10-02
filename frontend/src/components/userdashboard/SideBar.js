import React from 'react'
import './side.css'
import DashNavbar from '../dashboard/DashNavbar'
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import "./side.css"
import "./user.css"
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../features/user_slice'
import {selectuser} from '../../features/user_slice'
import $ from 'jquery'
const SideBar = () => {



    const dispatch = useDispatch()
    function handleLogout(){
        
        dispatch(logout())
    }
    const user = useSelector(selectuser)
    console.log(user)
    let redirectVar = null;
   
 
 
    return (<div>
            {redirectVar}
            <nav id="usersidebar" >

                

        <ul className="list-unstyled components">
            
            <li >
                <a href="/user/home" data-toggle="" aria-expanded="false" className="dropdown-toggle">Home</a>
                
            </li>
            <li >
                <div id="advance_search" style={{background:"black",color:"white"}}>
                    <p >Advance Search</p>    
                </div>        
            </li>
            <li >
                <a href="/home" data-toggle="" aria-expanded="false" className="dropdown-toggle">Update Profile</a>
                
            </li>
            <li >
                <a href="/userdash/resteraunts" data-toggle="" aria-expanded="false" className="dropdown-toggle">Resto</a>
                
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="" aria-expanded="false" className="dropdown-toggle">Cart</a>
                
            </li>
            <li >
                <a href="#homeSubmenu" data-toggle="" aria-expanded="false" className="dropdown-toggle">Home</a>
                
            </li>
            <li >
                <a href="#homeSubmenu" data-toggle="" aria-expanded="false" className="dropdown-toggle">My orders</a>
                
            </li>
            <li>
                <button classname="btn btn-dark" style={{background:"black",color:"white", border:"None", padding:"2px 4px 3px 10px", fontSize:"20px", display:"block", textDecoration:"none" }} onClick={handleLogout}>Logout</button></li>
                 </ul>
        
            </nav>

            </div>
            
            
            
            
        
    )
}

export default SideBar
