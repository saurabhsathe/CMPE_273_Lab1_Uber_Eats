import React from 'react'
import Navbar from './Navbar'
import BootCdnUser from './BootCdnUser'
import BootCdn from './BootCdn'
import Contentbar from './Contentbar'
import {selectuser} from '../../features/user_slice'
import Sidebar from './SideBar'
import {useSelector,useDispatch} from 'react-redux'
import Prosidebar from './Prosidebar'
const Userdash = () => {
    const user = useSelector(selectuser)
    console.log(user)
    let redirectVar = null;
    
    /*
    if(!user){
           redirectVar = <Redirect to="/userlogin"/>
    }
*/
    return (
        <div >

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
