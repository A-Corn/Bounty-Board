import React from 'react'
import '../App.css';
import TypeWriter from './TypeWriter';

const LandingPage = () => {

    const typeWriter = ["Applications", "Interviews", "Network"];

    return (
        <div className='LandingPage min-vh-100 text-white'>
            <div className='p-5'>
                <div className='p-5 position-absolute bottom-50 end-50'>
                    <h1 className=''> Bounty Board</h1>
                    <p> Keep track of your <TypeWriter data={typeWriter} /> </p>
                    <button className='btn'> Login/ Sign-up</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;