import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/auth.css";

export const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setdisplayName] = useState("");
    const navigate = useNavigate();


    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3000/auth/register", {
                username,
                password,
                displayName
            });
            alert("Registration Completed. Now Login!");
            navigate("/auth");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='container'>
            <div className='signup-form-container p-5'>
                <form onSubmit={onSubmit}>
                    <h3 className='text-center'>Sign Up</h3>

                    <div className='mb-2'>
                        <label htmlFor="username">Username</label>
                        <input
                         type="text" 
                         placeholder='Enter username' 
                         className='form-control' 
                         id='username' 
                         value={username}
                         onChange={(event) => setUsername(event.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        placeholder='Enter password' 
                        className='form-control' 
                        id='password'
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="displayname">Display-name</label>
                        <input
                         type="text" 
                         placeholder='Enter display-name' 
                         className='form-control' 
                         id='displayname' 
                         value={displayName}
                         onChange={(event) => setdisplayName(event.target.value)}/>
                    </div>

                    <div className='d-flex justify-content-center mt-2'>
                        <button 
                        type='submit'
                        className='btn btn-primary w-100'>Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered <Link to="/auth" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
