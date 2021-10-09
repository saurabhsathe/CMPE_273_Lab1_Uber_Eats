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
const Userdash = () => {
    const user = useSelector(selectuser)
    console.log(user)
    let redirectVar = null;
    
    
    if(!cookie.load('cookie')){
        redirectVar = <Redirect to= "/userlogin"/>
    }
    console.log("here is the redirectvar",redirectVar)
    
    return (
        <div >
            {redirectVar}
            <BootCdn />
            <BootCdnUser />
            <Navbar />
            
            <div className="row">
                    <div className="col-md-3 userdashdiv" style={{marginTop:"50px"}}>
                        <Prosidebar />
                    </div>
                    <div className="col-md-9 userdashdiv" id="user-contentbar" >

                        <Contentbar />
                    </div>
            </div>
            
        </div>
    )
}

export default Userdash
