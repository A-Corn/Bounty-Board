import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditInterview = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [interviewerName, setInterviewerName] = useState("");
    const [interviewerTitle, setInterviewerTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [interviewDate, setInterviewDate] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/interviews/${id}`)
            .then( res => {
                console.log(res.data);
                setInterviewerName(res.data.interviewerName);
                setInterviewerTitle(res.data.interviewerTitle);
                setCompanyName(res.data.companyName);
                setInterviewDate(res.data.interviewDate);
                setEmail(res.data.email);
                setPhoneNumber(res.data.phoneNumber);
            })
            .catch( err => console.log(err))
        }, [])

    const editInterview = (e) => {
        e.preventDefault();
        const formInfo = { interviewerName, interviewerTitle, companyName, interviewDate, email, phoneNumber }
        
        axios.put("http://localhost:8000/api/interviews/edit/" + id, formInfo)
            .then((res) => {
                console.log("this means I'm working", res.data)
                navigate('/interviews')
            })
            .catch((err) => {
                console.log(err)
            })
        }

    return (
        <div>
            <div className="container mt-5 ">
                <h2>New Interview</h2>
                <form onSubmit={editInterview}>
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
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company Name </label>
                        <input
                            className="form-control"
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName}
                        />
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
                    <button className="btn btn-light mb-5 b-color">Update Interview</button>
                </form>
                <Link to='/interviews'>Back to Interview List</Link>
            </div>
        </div>
    );
};

export default EditInterview;