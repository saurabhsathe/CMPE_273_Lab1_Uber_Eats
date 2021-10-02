import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './proside.css'
const Prosidebar = () => {
    return (
        <ProSidebar style={{fontSize:"20px"}}>
  <Menu iconShape="square">
    <MenuItem ><h3>Dashboard</h3></MenuItem>
    
    <h3><SubMenu title="Components" >
      <MenuItem>
      <div>
              <form>
                    <input type="number" />
             </form>    
          
      </div>
      </MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu></h3>
  </Menu>
</ProSidebar>
    )
}

export default Prosidebar
