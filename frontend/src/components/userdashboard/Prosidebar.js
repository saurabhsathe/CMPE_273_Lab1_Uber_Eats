import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './proside.css'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
const Prosidebar = () => {
/*
  <!--
    <h3><SubMenu title="Advance Search" >
      <MenuItem>
      Option 1
      </MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu></h3>

*/ 

    return (<nav stye={{overflow:"hidden"}}>
        <ProSidebar style={{fontSize:"20px",marginBottom:"-5000px",paddingBottom:"5000px"}}>
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
    <MenuItem ><button onClick="" style={{background:"transparent",border:"none",color:"#adb5bd"}}>Logout </button></MenuItem>
    
  </Menu>
</ProSidebar>
</nav>
    )
}

export default Prosidebar
