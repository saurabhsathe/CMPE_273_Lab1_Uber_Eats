import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './proside.css'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../features/user_slice'
import {selectuser} from '../../features/user_slice'
import cookie from 'react-cookies'

const Prosidebar = () => {
  const dispatch = useDispatch()
  let redirectVar = null;
function handleLogout(){
  alert("I am here")
  dispatch(logout())
  cookie.remove('cookie', { path: '/' })
  
}

    
    
if(!cookie.load('cookie')){
    redirectVar = <Redirect to= "/userlogin"/>
}

    return (
      <div>{redirectVar}
    <nav stye={{overflow:"hidden"}}>
        <ProSidebar id= "sidenav" style={{fontSize:"20px",marginBottom:"-5000px",paddingBottom:"5000px"}}>
  <Menu iconShape="square">
    <MenuItem ><a href="/userdash" >Dashboard</a></MenuItem>
    <hr />
    <MenuItem >
    <a href="/userdash/userupdate" >Update Profile</a>
    </MenuItem>
    <hr />
    
    
    <MenuItem >Cart</MenuItem>
    <hr />
    <MenuItem ><a href="/userdash/pastorders" >Past Orders</a></MenuItem>
    <hr />
    <MenuItem ><button onClick={handleLogout} style={{background:"transparent",border:"none",color:"#adb5bd"}}>Logout </button></MenuItem>
    
  </Menu>
</ProSidebar>
</nav>
</div>
    )
}

export default Prosidebar
