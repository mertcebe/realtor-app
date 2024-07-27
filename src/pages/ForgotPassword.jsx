import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth';

const ForgotPassword = () => {
  let [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const submitFunc = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-4'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sign_image" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input type="email" id='email' className='w-full bg-white border-2 mb-4 h-12 p-2' defaultValue={email} onChange={onChange} placeholder='Email address' />
            
            <div className='flex justify-between mt-4 mb-8'>
              <p className='p-0 m-0 font-semibold'>Don't have an account? <Link to={'/sign-up'} className='text-red-700'>Register</Link></p>
              <Link to={'/sign-in'} className='text-blue-600 font-semibold'>Sign in instead</Link>
            </div>
            <button className='w-full text-white bg-blue-600 font-semibold py-3 text-sm hover:bg-blue-700' onClick={submitFunc}>SEND RESET PASSWORD</button>
            <div className='relative my-6'>
              <span className='absolute left-2/4 -top-3 -translate-x-1/2 bg-slate-50 px-4'>OR</span>
              <hr />
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword