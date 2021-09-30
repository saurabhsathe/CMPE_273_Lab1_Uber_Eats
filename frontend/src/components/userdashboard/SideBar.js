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

const SideBar = () => {
    const dispatch = useDispatch()
    function handleLogout(){
        
        dispatch(logout())
    }
    const user = useSelector(selectuser)
    console.log(user)
    let redirectVar = null;
    if(!user){
        redirectVar=<Redirect to="/userlogin" />

    }
    
    return (<div>
            {redirectVar}
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
            <li><button classname="btn btn-dark" onClick={handleLogout}>Logout</button></li>
                 </ul>
        
            </nav>
            
            </div>
            
            
            
            
        
    )
}

export default SideBar
