import React from 'react'
import "./styles/auth.css";

export const Auth = () => {
  return (
    <div className='login'>
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

        </form>
    </div>
  )
}
