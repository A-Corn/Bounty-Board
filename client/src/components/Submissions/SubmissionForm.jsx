import React, { useState } from 'react'
import axios from 'axios';

const SubmissionForm = () => {
    let [Company, setCompany] = useState("");
    let [Position, setPosition] = useState("");
    let [Contact, setContact] = useState("");
    let [DateApplied, setDateApplied] = useState("");
    let [NextStep, setNextStep] = useState("");

    // Submit handler
    const submitForm = (e) => {

        // Package up form infomation
        let formInfo = { Company, Position,Contact, DateApplied, NextStep }

        axios.post("http://localhost:8000/api/add/submissions", formInfo)
            .then(res => {
                console.log("this means I'm working", res)
            })
            .catch(err => console.log("error", err))
        // Clear out form information after  submitting the form 
        setCompany("");
        setPosition("");
        setContact("");
        setDateApplied("");
        setNextStep("");
    }
    return (
        <div>
            <h2 className='header pt-5 font'>New Resume Submission</h2>
            <div className="container mt-5 ">
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label "> </label>
                        <input
                            placeholder='Company'
                            className="form-control "
                            onChange={(e) => setCompany(e.target.value)}
                            value={Company}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Position'
                            className="form-control"
                            onChange={(e) => setPosition(e.target.value)}
                            value={Position}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Contact'
                            className="form-control"
                            onChange={(e) => setContact(e.target.value)}
                            value={Contact}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Date Applied'
                            className="form-control"
                            onChange={(e) => setDateApplied(e.target.value)}
                            value={DateApplied}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Next Step'
                            className="form-control"
                            onChange={(e) => setNextStep(e.target.value)}
                            value={NextStep}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-light mb-5 b-color">
                        Add Submission
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubmissionForm;
