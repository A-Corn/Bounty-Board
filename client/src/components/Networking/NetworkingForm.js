import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NetworkingForm = () => {
    const [contactName, setContactName] = useState("");
    const [contactTitle, setContactTitle] = useState("");
    const [event, setEvent] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const navigate = useNavigate();

    // Submit handler
    const submitForm = (e) => {
        e.preventDefault();
        // Package up form infomation
        let formInfo = { contactName, contactTitle, event, companyName, contactInfo }

        axios.post("http://localhost:8000/api/network_contacts", formInfo)
            .then(res => {
                console.log("this means I'm working", res)
                navigate('/network_contacts');
            })
            .catch(err => console.log("error", err))
    }
    return (
        <div>
            <h2 className='header pt-5 font'>New Contact</h2>
            <div className="container mt-5 ">
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label "> </label>
                        <input
                            placeholder='Contact Name'
                            className="form-control "
                            onChange={(e) => setContactName(e.target.value)}
                            value={contactName}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Contact Title'
                            className="form-control"
                            onChange={(e) => setContactTitle(e.target.value)}
                            value={contactTitle}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Event Met At'
                            className="form-control"
                            onChange={(e) => setEvent(e.target.value)}
                            value={event}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Company'
                            className="form-control"
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> </label>
                        <input
                            placeholder='Contact Info'
                            className="form-control"
                            onChange={(e) => setContactInfo(e.target.value)}
                            value={contactInfo}
                        />
                    </div>
                    
                    <button className="btn btn-light mb-5 b-color">
                        Add New Contact
                    </button>
                </form>
            </div>
        </div>
    );
};


export default NetworkingForm;