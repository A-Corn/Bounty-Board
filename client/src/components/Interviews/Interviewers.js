import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';

const Interviewers = () => {
    const navigate = useNavigate();
    const [interviewList, setInterviewList] = useState([]);
    

    useEffect(()=> {
        axios.get('http://localhost:8000/api/interviews')
            .then((res)=> {
                console.log('resdata', res.data)
                setInterviewList(res.data)
            })
            .catch((error)=> {
                
                console.log(error)
            })
    }, [])


    const handleDelete = (interviewId) => {
        axios.delete(`http://localhost:8000/api/interviews/${interviewId}`)
        .then((res)=> {
            const newInterviewList = interviewList.filter((singleInterview)=> {
                return singleInterview._id !== interviewId
            })
            setInterviewList(newInterviewList);
        })
        .catch((error)=> {
            console.log('Could not delete', error)
        })
    }

    


    return (
        <div className='container w-75 border border-dark m-3 mx-auto'>
            <Navbar/>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Interviewer Name/Title</th>
                        <th>Interview Date</th> 
                        <th>Company Name</th> 
                        <th>Email Contact</th>
                        <th>Phone Number</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                
                    {/* //each item in map is interview name, date, company name, email, phone */}
                        {
                            interviewList.map((item, index)=> {
                                return <tr key={item._id}>
                                        <td>{item.interviewerName}, {item.interviewerTitle}</td>
                                        <td>{item.interviewDate}</td>
                                        
                                        <td>{item.companyName}</td>
                                    
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>
                                            <Link to={`/interviews/edit/${item._id}`}>
                                                <button className='btn btn-success'>Edit Info</button>
                                            </Link>
                                            <button onClick={()=>{handleDelete(`${item._id}`)}} className='btn btn-danger mx-2'>Delete</button>
                                        </td>
                                </tr>
                            })
                        }
                </tbody>
            </table>
            <button onClick={()=>navigate('/interview_form')}>Add New Interview</button>
        </div>
    );
};

// interviewers.propTypes = {};

export default Interviewers;