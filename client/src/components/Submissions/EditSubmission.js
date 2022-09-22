import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const EditSubmission = () => {
    const {id} = useParams();
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [nextStep, setNextStep] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/submissions/${id}`)
        .then( res => {
            console.log(res.data);
            setCompany(res.data.company);
            setPosition(res.data.position);
            setContact(res.data.contact);
            setDate(res.data.date);
            setNextStep(res.data.nextStep);
        })
        .catch( err => console.log(err))
    }, [])

    // Submit handler
    const editSubmission = (e) => {

        e.preventDefault();

        // Package up form infomation
        let formInfo = { company, position, contact, date, nextStep }

        axios.put("http://localhost:8000/api/submissions/edit/" + id, formInfo)
            .then(res => {
                console.log("this means I'm working", res)
                navigate('/submissions')
            })
            .catch(err => console.log("error", err))
    }
    
    return (
        <div>
            <h2 className='header pt-5 font'>Edit Resume Submission</h2>
            <div className="container mt-5 ">
                <form onSubmit={editSubmission}>
                    <div className="mb-3">
                        <label className="form-label "> </label>
                        <input
                            placeholder='Company'
                            className="form-control "
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Position'
                            className="form-control"
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Contact'
                            className="form-control"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Date Applied'
                            className="form-control"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Next Step'
                            className="form-control"
                            onChange={(e) => setNextStep(e.target.value)}
                            value={nextStep}
                        />
                    </div>
                    
                    <button className="btn btn-light mb-5 b-color">
                        Update Submission
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditSubmission;
