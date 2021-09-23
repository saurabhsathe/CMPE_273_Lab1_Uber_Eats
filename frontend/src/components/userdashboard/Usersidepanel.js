import React from 'react'
import './user.css';
import {useState} from 'react'
import Resteraunts from './Resteraunts'
import Userinfo from './Userinfo'
import {Redirect ,Link} from 'react-router';

const Usersidepanel = () => {
    let redirectVar = null
    function handleSwitch(e){
        let x=e.target.value
        if(x=="about"){
            alert("we are here")
            redirectVar = Resteraunts 
            document.getElementById("maindiv").innerHTML={redirectVar}
        }
    }
    return (
       
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
        
        </style>
        </head>
        <body>
        
        <div className="sidenav">
          
          <button value="about" onClick={e=>handleSwitch(e)}>About</button>
          <button value="about2" onClick={e=>handleSwitch(e)}>hello</button>
          
          
        </div>
        
        <div className="main" id="maindiv">
            {redirectVar}
         </div>
           
        </body>
        </html> 
            
    )
}

export default Usersidepanel
