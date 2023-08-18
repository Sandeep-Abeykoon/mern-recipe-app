import React from 'react'
import "./styles/auth.css";

export const Auth = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 text-white'>
        <div className='40-w p-5 rounded' id='inner-container'>
            <form>
                <h3>Sign In</h3>

                <div className='mb-2'>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter username' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
                    <label htmlFor="check" className='custom-input-label'>Remember me</label>
                </div>

                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign in</button>
                </div>
                <p className='text-right'>
                    Forgot <a href="#">Password?</a> <a href="#">Sign up</a>
                </p>
            </form>
        </div>
    </div>
  )
}
