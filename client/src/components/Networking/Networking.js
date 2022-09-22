import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';

const Networking = () => {

    const [ contacts, setContacts] = useState([]);

    const removeFromDom = contactID => {
        setContacts(contacts.filter(contact => contact._id != contactID));
    }
    // useEffect keeps our axios call from re-rendering
    useEffect(() => {
        axios.get("http://localhost:8000/api/network_contacts")
            // ⬇api returns back as an promise⬇
            .then(res => {
                console.log("response: ", res)
                // Saving results array of objects into state
                setContacts(res.data)
            })
            .catch(err => {
                console.log("error", err)
            })
    }, [])

    const deleteContact = (contactID) => {
        axios.delete(`http://localhost:8000/api/network_contacts/${contactID}`)
        .then((res) => {
            console.log(res)
            removeFromDom(contactID)
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar/>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Contact Name</th>
                            <th scope="col">Contact Title</th>
                            <th scope="col">Event</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Contact Info</th>
                            <th scope="col">Actions</th>
                        </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) => {
                        return(
                            <tr key={contact._id}>
                                <td>{contact.contactName}</td>
                                <td>{contact.contactTitle}</td>
                                <td>{contact.event}</td>
                                <td>{contact.companyName}</td>
                                <td>{contact.contactInfo}</td>
                                <td>
                                    <Link to={`/edit_network_contact/${contact._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={ e => {deleteContact(contact._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody> 
            </table>
            <Link to='/network_form'>
                <button className="btn btn-primary mb-5">Add New Contact</button>
            </Link>
        </div>
    );
};


export default Networking;