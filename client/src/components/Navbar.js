import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='logo pt-2 bg-light d-flex justify-content-evenly'>
            {/* <div className='navbar-brand pt-2'></div>  */}

                <NavLink to='/submissions'>Submissions</NavLink>
                <NavLink to='/interviews'>Interviews</NavLink>
                <NavLink to='/network_contacts'>Networking</NavLink>
                
                
                

        </div>
    )
}

export default Navbar;