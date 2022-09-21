import React, { useState } from 'react'
import axios from "axios";

const InterviewForms = () => {
            let [Company, setCompany] = useState("");
            let [Position, setPosition] = useState("");
            let [Contact, setContact] = useState("");
            let [DateApplied, setDateApplied] = useState("");
            let [NextStep, setNextStep] = useState("");
    const submitForm = (e) => {
        let formInfo = { Company, Position, Contact, DateApplied, NextStep }
        
        axios.post("http://localhost:8000/api/interview_form", formInfo)
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
            <div className="container mt-5 ">
                            <h2>New Interview</h2>

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
                        Add New Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InterviewForms;