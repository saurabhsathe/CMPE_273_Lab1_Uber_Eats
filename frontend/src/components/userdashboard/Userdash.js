import React from 'react'
import Navbar from './Navbar'
import BootCdnUser from './BootCdnUser'
import BootCdn from './BootCdn'
import Contentbar from './Contentbar'
import {selectuser} from '../../features/user_slice'
import Sidebar from './SideBar'
import {useSelector,useDispatch} from 'react-redux'
import Prosidebar from './Prosidebar'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import {useCookies} from 'react-cookie'
import {useState,useEffect} from 'react'
import axios from 'axios'


const Userdash = () => {
    const [cookies, setCookie] = useCookies(["customer"]);
    const user = useSelector(selectuser)
    console.log(user)
    
    let redirectVar=null
    const [original_restos,setoriginal_restos]=useState([])
    let [restos_modified,setrestos]=useState([])

    useEffect(()=>{

        {
            
                     var headers = new Headers(); 
                   const data = {
                       resteraunt_name:"dasdsadsa"
                   }
          
                axios.post("http://localhost:3001/getallResto",data).then(response=>{
                        
                        if(response.status === 200)
                        {
                            
                            console.log(response.data,typeof response.data)
                            setoriginal_restos(response.data[0])
                            setrestos(response.data[0])
                            
                            console.log("got the restaurants",response.data[0])
                            
                        }
                        else if(response.status === 202)
                        {
                            console.log("no data found")
                        }
        
                })
               
            }
            
        
        
        
        },[]);







    if(!cookie.load('cookie')){
        redirectVar = <Redirect to= "/userlogin"/>
    }
    console.log("here is the redirectvar",redirectVar)
    
    




    return (
        <div >
            {redirectVar}
            <BootCdn />
            <BootCdnUser />
            <Navbar orestos={original_restos} setrestos={setrestos}/>
            
            <div className="row">
                    <div className="col-md-3 userdashdiv" style={{marginTop:"50px"}}>
                        <Prosidebar />
                    </div>
                    <div className="col-md-9 userdashdiv" id="user-contentbar" >

                        <Contentbar restos={restos_modified}/>
                    </div>
            </div>
            
        </div>
    )
}

export default Userdash
