import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./styles/auth.css";

export const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3000/auth/register", {
                username,
                password
            });
            alert("Registration Completed. Now Login!")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100 text-white'>
            <div className='form-container p-5 rounded'>
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

                    <div className='d-grid'>
                        <button 
                        type='submit'
                        className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered <Link to="/auth" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
