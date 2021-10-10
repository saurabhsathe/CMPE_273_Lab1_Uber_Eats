import React from 'react'
import Searchbar from './Searchbar'
import Vegnonvegoption from './Vegnonvegoption'
import Location from './Location' 
import './vegnonveg.css'
import {useState,useEffect} from 'react'
const Navbar = (props) => {
    const [checkbtn,setcheckbtn] = useState(false)
    const [radioval,setradioval]=useState("all")
    const [restname,setrestname]=useState("")
    const [restzip,setrestzip]=useState("")
    function filterRestos(e){
        e.preventDefault()
        props.setfilters({restzip:{restzip},radioval:{radioval},restname:{restname}})
        
    }
    
    return (
        <div class="wrapper">
            
            <div id="sidenav">
            <nav className="navbar navbar-expand-lg fixed-top navbar-inner" >
        <div className="container-fluid navcontainer row" >
        
        <form id="search-form" class="form-inline" role="form" onSubmit={filterRestos}>
        
            <div className="col-sm brand" >
            <a className="navbar-brand"><img style={{border:0}} src="/ue2.png" /></a>
            
            </div>
            <div className="col-sm">    
            <input type="text" value={restzip} class="form-control location-form" onChange={e => setrestzip(e.target.value)} placeholder="Enter Zipcode" />
            </div>
            
                
            
            <div className="col-sm">    
            <div className="mainradio" data-toggle="buttons">
        
        <input type="radio" value="all" onChange={e=>setradioval(e.target.value)} className="radio_button" id="all" name="options" defaultChecked/>
        <label for="all" className="radio_label">all</label>

       <input type="radio" className="radio_button" value="pickup" onChange={e=>setradioval(e.target.value)} id="veg" name="options"  />
       <label for="veg" className="radio_label">pickup</label>

        <input type="radio" className="radio_button" value="drop" onChange={e=>setradioval(e.target.value)} id="nonveg" name="options" /> 
        <label for="nonveg" className="radio_label">drop</label>

          </div>      

            </div>
            
            <div className="col-sm">
                    <div class="input-group">
                    <input type="text" value={restname} class="form-control search-form" onChange={e => setrestname(e.target.value)} placeholder="Enter Restaurant Name" />
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-dark search-btn" data-target="#search-form" name="q">
                            search
                    
		                 </button></span>
        
                    </div>
            </div>
            
            
            


            
           
            </form>
            
        
        
        </div>
        
    </nav>
    </div>
        


        </div>
    )
}

export default Navbar