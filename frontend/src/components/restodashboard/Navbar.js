import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useCookies } from "react-cookie";
const Navbar = (props) => {
    function sidehandle(e){
        e.preventDefault();
    }
    const [cookies, setCookie] = useCookies(["restaurant"]);
    
    return (
        <div class="wrapper">
            
            <div id="sidenav">
            
            <nav className="navbar navbar-expand-lg fixed-top navbar-inner" >
        
        <div className="container-fluid navcontainer row" >
        
        <form id="search-form" class="form-inline" role="form" onSubmit={sidehandle}>
            <div className="col-sm brand" >
            <a className="navbar-brand"><img style={{border:0}} src="/ue2.png" /></a>
            
            </div>
            <div className="col-sm">    
            </div>
            
                
            
            <h2> Helllo, {cookies.resteraunt_name}</h2>
            <a className="navbar-brand"><img style={{border:0}} src={cookies.restdp} /></a>
           
            
            <div className="col-sm">
            
            </div>

            
           
           </form> 
        
        
        </div>
        
    </nav>
    </div>
        


        </div>
    )
}

export default Navbar
