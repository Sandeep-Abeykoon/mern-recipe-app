import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./styles/auth.css";

export const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100 text-white'>
            <div className='form-container p-5 rounded'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>

                    <div className='mb-2'>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Enter username' className='form-control' id='username' onChange={(event) => setUsername(event.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter password' className='form-control' id='password' onChange={(event) => event.target.value}/>
                    </div>

                    <div className='d-grid'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered <Link to="/auth" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
