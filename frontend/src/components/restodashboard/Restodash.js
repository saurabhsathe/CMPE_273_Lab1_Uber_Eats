import React from 'react'
import Navbar from '../Navbar'
import BootCdnUser from './BootCdnUser'
import BootCdn from './BootCdn'
import SideBar from './RestoSideBar'
import Contentbar from './Contentbar'
import Prosidebar from './Prosidebar'
const Userdash = () => {
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
