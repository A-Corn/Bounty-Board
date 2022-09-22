import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({});

    const handleRegister = async (e) => {
        e.preventDefault();
        //store form data in object
        const userData = {
            name, email, password, confirmPassword
        }
        try{
            await axios.post('http://localhost:8000/api/register', userData);
            navigate('/interviews') 
            
            
        }catch(error){
            console.log(error)
            setErrors(error.response.data.errors)
        }
        
    }

    return (
        <div className='container py-5 h-100 w-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-xl-10'>
                    <div className='card rounded-3 text-white'>
                        <div className='row g-0'>
                            <div className='col-lg-5 d-flex align-items-center' style={{ background: "linear-gradient(24deg, rgba(34, 87, 122, 1) 0%, rgba(56, 163, 165, 1) 35%, rgba(87, 204, 153, 1) 79%, rgba(128, 237, 153, 1) 100%)" }}>
                            </div>
                            <div className='col-7'>
                                <div className='card-body p-md-6 mx-md-6'>
                                    <h1 className='mt-1 mb-5 pb-1'> Bounty Board</h1>
                                    <form onSubmit={handleRegister}>
                                        <p> Create Account</p>
                                        <div className='form-outline mb-1'>
                                            <input type="text" 
                                                className="form-control"
                                                placeholder="Name"
                                                onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                        <div className='form-outline mb-1'>
                                            <input type="email" 
                                                className="form-control"
                                                placeholder="Email address"
                                                onChange={(e)=>setEmail(e.target.value)} />
                                        </div>
                                        <div className='form-outline mb-1'>
                                            <input type="password" 
                                                className="form-control"
                                                placeholder="Password"
                                                onChange={(e)=>setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <input type="password" 
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                onChange={(e)=>setConfirmPassword(e.target.value)}  />
                                        </div>
                                        {
                                            errors.email?
                                            <p>{errors.email.message}</p>:null
                                        }
                                        {
                                            errors.message?
                                            <p>{errors.message}</p>:null
                                        }
                                        {
                                            errors.confirmPassword?
                                            <p>{errors.confirmPassword.message}</p>:null
                                        }
                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button className="btn btn-primary">Sign Up</button>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Already Registered?</p>
                                            <button onClick={() => navigate('/login')} className="btn btn-danger text-white">Login</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
    </div>
    )
}

export default SignUp;