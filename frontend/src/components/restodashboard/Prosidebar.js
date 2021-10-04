import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './proside.css'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
const Prosidebar = () => {


    return (
    
    <nav stye={{overflow:"hidden"}}>
        <ProSidebar style={{fontSize:"20px",marginBottom:"-5000px",paddingBottom:"5000px"}}>
  <Menu iconShape="square">
    <MenuItem ><a href="/restodash" >Dashboard</a></MenuItem>
    <hr />
    <MenuItem >
    <a href="/restodash/updateowner">Update Profile</a>
    </MenuItem>
    <hr />
    <MenuItem >
    <a href="/restodash/createdish" >Add Dish</a>
    </MenuItem>
    <hr />
    <MenuItem >
    <a href="/restodash/currentorders" >CurrentOrder</a>
    </MenuItem>
    <hr />
    
    
    
    <MenuItem >Customers</MenuItem>
    <hr />
    <MenuItem ><a href="/restodash/pastorders" >Past Orders</a></MenuItem>
    <hr />
    <MenuItem ><button onClick="" style={{background:"transparent",border:"none",color:"#adb5bd"}}>Logout </button></MenuItem>
    
  </Menu>
</ProSidebar>
</nav>
    )
}

export default Prosidebar
