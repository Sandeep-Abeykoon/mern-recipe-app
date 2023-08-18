import React, { useState } from 'react';
import "./styles/auth.css";
import { Link } from 'react-router-dom';

export const Auth = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 text-white'>
        <div className='form-container p-5 rounded'>
            <form>
                <h3 className='text-center'>Sign In</h3>

                <div className='mb-2'>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    placeholder='Enter username' 
                    className='form-control'
                    id='username'
                    onChange={(event) => setUsername(event.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    placeholder='Enter password' 
                    className='form-control'
                    id='password'
                    onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
                    <label htmlFor="check" className='custom-input-label ms-2'>Remember me</label>
                </div>

                <div className='d-grid mt-2'>
                    <button className='btn btn-primary'>Sign in</button>
                </div>
                <p className='text-end mt-2'>
                    Forgot <a href="#">Password?</a> <Link to="/signup" className='ms-2'>Sign up</Link>
                </p>
            </form>
        </div>
    </div>
  )
}
