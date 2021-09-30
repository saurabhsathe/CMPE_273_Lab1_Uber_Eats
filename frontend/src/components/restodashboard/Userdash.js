import React from 'react'
import Navbar from '../Navbar'
import BootCdnUser from './BootCdnUser'
import BootCdn from './BootCdn'
import SideBar from './SideBar'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Resteraunts from './Resteraunts'
import Userinfo from './Userinfo'
import Contentbar from './Contentbar'
const Userdash = () => {
    return (
        <div >

            <BootCdn />
            <BootCdnUser />
            <Navbar />
            
            <div className="row">
                    <div className="col-md-3 userdashdiv">
                        <SideBar />
                    </div>
                    <div className="col-md-9 userdashdiv" id="user-contentbar" >

                        <Contentbar />
                    </div>
            </div>
            
        </div>
    )
}

export default Userdash
