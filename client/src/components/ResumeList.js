import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const ResumeList = props => {

    const [submissions, setSubmissions] = useState([]);

    const removeFromDom = resumeID => {
        setSubmissions(submissions.filter(submission => submission._id != resumeID));
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/submissions')
        .then( res => {
            console.log(res.data);
            setSubmissions(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }, [])

    const deleteSubmission = resumeID => {
        axios.delete(`http://localhost:8000/api/submissions/${resumeID}`)
        .then( res => {
            console.log(res)
            removeFromDom(resumeID)
        })
        .catch( err => console.log(err));
    }

    return(
        <div>
            <Link to="/new_submission">New Resume Submission</Link>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Contact</th>
                        <th>Date</th>
                        <th>Next Step</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { submissions.map((submission, index) => {
                        return(
                            <tr key={submission._id}>
                                <td>{submission.company}</td>
                                <td>{submission.position}</td>
                                <td>{submission.contact}</td>
                                <td>{submission.date}</td>
                                <td>{submission.nextStep}</td>
                                <td>
                                    <Link to={`/edit_submission/${submission._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={ e => {deleteSubmission(submission._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ResumeList;