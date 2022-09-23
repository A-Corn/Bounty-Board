import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';

const InterviewForms = () => {
    const navigate = useNavigate();
    const [interviewerName, setInterviewerName] = useState("");
    const [interviewerTitle, setInterviewerTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [interviewDate, setInterviewDate] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [err, setErr] = useState({})
    

    const submitForm = (e) => {
        e.preventDefault();
        
        const formInfo = { interviewerName, interviewerTitle, companyName, interviewDate, email, phoneNumber }
        
        axios.post("http://localhost:8000/api/interviews", formInfo)
            .then((res) => {
                console.log("this means I'm working", res.data)
                navigate('/interviews')
            })
            .catch((err) => {
                console.log(err)
                setErr(err.response.data.errors)
            })
        // Clear out form information after  submitting the form 
        setInterviewerName("");
        setInterviewerTitle("");
        setCompanyName("");
        setInterviewDate("");
        setEmail("");
        setPhoneNumber("");
        }

    return (
        <div>
            <div className="container mt-5 ">
                <h2>New Interview</h2>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label ">Interviewer Name </label>
                        <input
                            className="form-control "
                            onChange={(e) => setInterviewerName(e.target.value)}
                            value={interviewerName}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Interviewer Title </label>
                        <input
                            className="form-control"
                            onChange={(e) => setInterviewerTitle(e.target.value)}
                            value={interviewerTitle}
                        />
                        {
                            err.interviewDate?
                            <p className='text-light'>{err.interviewDate.message}</p>:null
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company Name </label>
                        <input
                            className="form-control"
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName}
                        />
                          {
                            err.companyName?
                            <p className='text-light'>{err.companyName.message}</p>:null
                          }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Interview Date </label>
                        <input
                            className="form-control"
                            onChange={(e) => setInterviewDate(e.target.value)}
                            value={interviewDate}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email </label>
                        <input
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number </label>
                        <input
                            className="form-control"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                        />
                    </div>
                    <button className="btn btn-light mb-5 b-color">Add New Interview</button>
                </form>
                <Link to='/interviews'>Back to Interview List</Link>
            </div>
        </div>
    );
};

export default InterviewForms;
