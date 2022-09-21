import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
const Submission = () => {
    // const { id } = useParams();
    const [allSubmissions, setSubmissions] = useState([]);
    // useEffect keeps our axios call from re-rendering
    useEffect(() => {
        axios.get("http://localhost:8000/api/submissions")
            // ⬇api returns back as an promise⬇
            .then(res => {
                console.log("response: ", res)
                // Saving results array of objects into state
                setSubmissions(res.data.results)
            })
            .catch(err => {
                console.log("error", err)
            })
    }, [])

    return (
        <div>
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Position</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date Applied</th>
                            <th scope="col">Next Step</th>
                        </tr>
                    </thead>
                    {
                        allSubmissions?.map((submission, idx) => {
                            return (
                                <tbody>
                                    <tr key={submission._id}>
                                        <td>{submission.company}</td>
                                        <td>{submission.position}</td>
                                        <td>{submission.contact}</td>
                                        <td>{submission.date}</td>
                                        <td>{submission.nextStep}</td>
                                    </tr>
                                    
                                </tbody>
                );
                    })
                }
                </table>
                <Link to="/api/add/submissions">
                    <button className="btn btn-primary mb-5">Add New Subscription</button>
                </Link>

            </>
        </div>
    );
};


export default Submission;