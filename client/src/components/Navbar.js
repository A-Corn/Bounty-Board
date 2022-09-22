import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* <div className='navbar-brand pt-2'></div>  */}
            <div className='d-flex justify-content-evenly p-3'>
                <div className='d-flex '>
                    <img src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/76/7804334076_8bc3c722-7708-4ddf-9afd-3dfc1f24630c.png?cb=1663813965' className='w-25'/>
                </div>
                <NavLink to='/submissions'>Submissions</NavLink>
                <NavLink to='/interviews'>Interviews</NavLink>
                <NavLink to='/network_contacts'>Networking</NavLink>
            </div>

        </div>
    )
}

export default Navbar;