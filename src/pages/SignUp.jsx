import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import OAuth from '../components/OAuth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import database, { auth } from '../firebase/firebaseConfig';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const SignUp = () => {
  let [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const { fullName, email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [btnControl, setBtnControl] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData(prev => {
      return (
        {...prev, [e.target.id]: e.target.value}
      )
    });
  }

  const submitFunc = async (e) => {
    e.preventDefault();
    setBtnControl(true);
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: fullName
    });
    const user = userCredentials.user;
    const formDataCopy = { ...formData };
    delete formDataCopy.password;
    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(database, 'users', user.uid), formDataCopy);
    navigate('/');
    setBtnControl(false);
    toast.success('Successfully signed up!');
  }

  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-4'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sign_image" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input type="text" id='fullName' className='w-full bg-white border-2 mb-4 h-12 p-2' defaultValue={fullName} onChange={onChange} placeholder='Full name' />
            <input type="email" id='email' className='w-full bg-white border-2 mb-4 h-12 p-2' defaultValue={email} onChange={onChange} placeholder='Email address' />
            <div className='relative'>
              <input type={showPassword ? 'text':'password'} id='password' className='w-full bg-white border-2 h-12 p-2' defaultValue={password} onChange={onChange} placeholder='Password' />
              <div className='absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition-all cursor-pointer' onClick={() => {setShowPassword(!showPassword)}}>
                {
                showPassword?
                <FaRegEye className='text-xl' />
                :
                <FaRegEyeSlash className='text-xl' />
                }
              </div>
            </div>
            <div className='flex justify-between mt-4 mb-8'>
              <p className='p-0 m-0 font-semibold'>Already have an account? <Link to={'/sign-in'} className='text-red-700'>Sign in</Link></p>
              <Link to={'/forgot-password'} className='text-blue-600 font-semibold'>Forgot Password?</Link>
            </div>
            <button className='w-full text-white bg-blue-600 font-semibold py-3 text-sm hover:bg-blue-700' onClick={submitFunc} disabled={btnControl}>SIGN UP</button>
            <div className='relative my-6'>
              <span className='absolute left-2/4 -top-3 -translate-x-1/2 bg-slate-50 px-4'>OR</span>
              <hr />
            </div>
            <OAuth disabled={btnControl} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp