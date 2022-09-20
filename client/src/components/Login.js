import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        const postData = { email, password };
        axios.post("". postData, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            navigate("/networking");
        })
        .catch((err) => console.log(err));
    };

    const navigate = useNavigate();

    return (
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-xl-10'>
                    <div className='card rounded-3 text-black'>
                        <div className='row g-0'>
                            <div className='col-lg-6'>
                                <div className='card-body p-md-5 mx-md-4'>
                                    <h1 className='mt-1 mb-5 pb-1'> Bounty Board</h1>
                                    <form onClick={handleSubmit}>
                                        <p> Please login to you account </p>
                                        <div className='form-outline mb-4'>
                                            <input type="email" id="form2Example11" class="form-control"
                                                placeholder="Email address" 
                                                onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example22" class="form-control"
                                                placeholder="Enter your password"  
                                                onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <button className="btn btn-primary" type="button">Login</button>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                            <p class="mb-0 me-2">Don't have an account?</p>
                                            <button class="btn btn-outline-danger" >Create new</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className='col-lg-6 d-flex align-items-center' style={{ background: "linear-gradient(24deg, rgba(34, 87, 122, 1) 0%, rgba(56, 163, 165, 1) 35%, rgba(87, 204, 153, 1) 79%, rgba(128, 237, 153, 1) 100%)" }}>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
    )
}

export default Login;