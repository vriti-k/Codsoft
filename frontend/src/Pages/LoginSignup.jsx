import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div  className='loginsignup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <div className='loginsignup-login'>Already have an account? <span>Login Here</span></div>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I am agreeing to the terms and cnditions applied</p>
        </div>
      </div>    
    </div>
  )
}

export default LoginSignup