import React, {useEffect, useState} from 'react'
//import NavBar
import axios from 'axios';
import {Link} from 'react-router-dom';

const Interviews = () => {

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



    return (
        <div className='container w-75 border border-dark m-3 mx-auto'>
            {/* render Navbar */}
            {/* map thru interviews database to render table */}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Interviewer Name/Title</th>
                        <th>Interview Date</th>
                        <th>Email Contact</th>
                        <th>Phone Number</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                
                    {//each item in map is interview name, date, email, phone
                        interviewList.map((item, index)=> {
                            return <tr key={item._id}>
                                    <td>{item.interviewerName}, {item.interviewerTitle}</td>
                                    <td>{item.interviewDate}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        <button className='btn btn-success'>Edit Info</button>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        
        </div>
    )
}

export default Interviews;