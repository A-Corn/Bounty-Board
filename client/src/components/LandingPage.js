import React from 'react'
import '../App.css';
import TypeWriter from './TypeWriter';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const typeWriter = ["Applications", "Interviews", "Network"];
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/signup')
    }

    return (
        <div className='LandingPage min-vh-100 text-white'>
            <div className='p-5'>
                <div className='p-5 position-absolute bottom-50 end-50'>
                    <h1 className=''> Bounty Board</h1>
                    <p> Keep track of your <TypeWriter data={typeWriter} /> </p>
                    <button className='btn' onClick={toLogin}>Login/ Sign-up</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;