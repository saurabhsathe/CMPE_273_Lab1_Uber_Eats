import React from 'react'
import {useState} from 'react'
import Searchbar from './Searchbar'
import Vegnonvegoption from './Vegnonvegoption'
import Location from './Location' 
import Resteraunts from './Resteraunts'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const windowsize = useState(window.innerWidth)
    if (windowsize >= 768) {
        $('#header').hover( function() {
            $('#main-navbar').slideToggle();
        } );
    } else {
        
        $('#main-navbar-collapse').hide();
        $('.navbar-toggle').on('click', function(){
            $('#main-navbar-collapse').toggle();
        });
    }
    return (
        <div>
            <nav id="user-nav" className="navbar navbar-expand-lg fixed-top navbar-inner" >
        <div className="container-fluid navcontainer row" >
        
        <div class="navbar-header">
                <button id="navbutton" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse" aria-expanded="false">
                    <span ><FontAwesomeIcon icon={faBars}/></span>
                </button>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar-collapse">
        <form id="search-form" class="form-inline" role="form" method="post">
            <div className="col-sm brand" >
            <a className="navbar-brand"><img style={{border:0}} src="/ue2.png" /></a>
            
            </div>
            <div className="col-sm">    
                <Location />
            </div>
            
                
            
            <div className="col-sm">    
                <Vegnonvegoption />
            </div>
            
            <div className="col-sm">
            <Searchbar />
            </div>
            
            
            </form>
            
        
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar
