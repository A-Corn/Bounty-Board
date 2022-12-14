import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Submission = () => {
    const [ allSubmissions, setAllSubmissions] = useState([]);
    
    const removeFromDom = resumeID => {
        setAllSubmissions(allSubmissions.filter(submission => submission._id != resumeID));
    }
    // useEffect keeps our axios call from re-rendering
    useEffect(() => {
        axios.get("http://localhost:8000/api/submissions")
            // ⬇api returns back as an promise⬇
            .then(res => {
                console.log("response: ", res)
                // Saving results array of objects into state
                setAllSubmissions(res.data)
            })
            .catch(err => {
                console.log("error", err)
            })
    }, [])

    const deleteSubmission = (resumeID) => {
        axios.delete(`http://localhost:8000/api/submissions/${resumeID}`)
        .then((res) => {
            console.log(res)
            removeFromDom(resumeID)
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar/>

            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Position</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date Applied</th>
                            <th scope="col">Next Step</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { allSubmissions.map((submission, index) => {
                        return(
                            <tr key={submission._id}>
                                <td>{submission.company}</td>
                                <td>{submission.position}</td>
                                <td>{submission.contact}</td>
                                <td>{submission.date}</td>
                                <td>{submission.nextStep}</td>
                                <td>
                                    <Link to={`/submissions/edit/${submission._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={ e => {deleteSubmission(submission._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody> 
                </table>
                <Link to="/add/submissions">
                    <button className="btn btn-primary mb-5">Add New Submission</button>
                </Link>
            </>
        </div>
    );
};


export default Submission;