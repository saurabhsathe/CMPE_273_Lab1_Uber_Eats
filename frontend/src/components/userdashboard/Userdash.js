import React from 'react'
import Navbar from '../Navbar'
import BootCdnUser from './BootCdnUser'
import BootCdn from './BootCdn'
import SideBar from './SideBar'
const Userdash = () => {
    return (
        <div>
            <BootCdn />
            <BootCdnUser />
            <Navbar />
            <SideBar />

        </div>
    )
}

export default Userdash
