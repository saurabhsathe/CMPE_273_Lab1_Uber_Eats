import React from 'react'
import Sidepanel from './SidePanel'
import BootCdn from './BootCdn'
import SignupForm from './SignupForm'
import {Link} from 'react-router-dom';

const MainSignupForm = () => {
    return (
        <div>
            <div className="main">
        <BootCdn />
        <Sidepanel />
        <SignupForm />        
        Already have an account? <Link to="/Login">Login</Link>&nbsp;   
         
         
      </div>
        </div>
    )
}

export default MainSignupForm
