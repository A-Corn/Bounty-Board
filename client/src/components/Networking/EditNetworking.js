import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditContact = () => {
    const {id} = useParams();
    const [contactName, setContactName] = useState("");
    const [contactTitle, setContactTitle] = useState("");
    const [event, setEvent] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    axios.get(`http://localhost:8000/api/network_contacts/${id}`)
        .then( res => {
            console.log(res.data);
            setContactName(res.data.contactName);
            setContactTitle(res.data.contactTitle);
            setEvent(res.data.event);
            setCompanyName(res.data.companyName);
            setContactInfo(res.data.contactInfo);
        })
        .catch( err => console.log(err))
    }, [])

    // Submit handler
    const editContact = (e) => {
        e.preventDefault();
        // Package up form infomation
        let formInfo = { contactName, contactTitle, event, companyName, contactInfo }

        axios.put("http://localhost:8000/api/network_contacts/edit/" + id, formInfo)
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
                <form onSubmit={editContact}>
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
                        Update Contact
                    </button>
                </form>
            </div>
        </div>
    );
};


export default EditContact;