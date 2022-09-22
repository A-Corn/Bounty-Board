import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const [successMsg, setSuccessMsg] = useState('');


    const handleLogout = () => {
        console.log('before')
        axios.post('http://localhost:8000/api/logout')
        .then((res)=> {
            console.log(res)
            setSuccessMsg(res.data.msg)
            navigate('/login')
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout