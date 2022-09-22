import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        const postData = { email, password };
        axios.post("http://localhost:8000/api/login", postData, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            navigate('/interviews');
        })
        .catch((err) => console.log(err));
    };


    return (
        <div className='container py-5 h-100 w-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-xl-10'>
                    <div className='card rounded-3 text-white'>
                        <div className='row g-0'>
                            <div className='col-7'>
                                <div className='card-body p-md-6 mx-md-6'>
                                    <h1 className='mt-1 mb-5 pb-1'> Bounty Board</h1>
                                    <form onSubmit={handleSubmit}>
                                        <p className='text-white'> Please login to your account </p>
                                        <div className='form-outline mb-5'>
                                            <input type="email" id="form2Example11" className="form-control"
                                                placeholder="Email address" 
                                                onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-outline mb-5">
                                            <input type="password" id="form2Example22" className="form-control"
                                                placeholder="Enter your password"  
                                                onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Don't have an account?</p>
                                            <button onClick={() => navigate('/signup')} className="btn btn-outline-danger" >Create new </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className='col-lg-5 d-flex align-items-center' style={{ background: "linear-gradient(24deg, rgba(34, 87, 122, 1) 0%, rgba(56, 163, 165, 1) 35%, rgba(87, 204, 153, 1) 79%, rgba(128, 237, 153, 1) 100%)" }}>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
    )
}

export default Login;