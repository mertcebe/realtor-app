import { signOut, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import database, { auth } from '../firebase/firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FcHome } from "react-icons/fc";
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

const Profile = () => {
  let [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const { fullName, email } = formData;
  const navigate = useNavigate();
  const [editNameControl, setEditNameControl] = useState(true);

  useEffect(() => {
    getDoc(doc(database, 'users', auth.currentUser.uid))
      .then((snapshot) => {
        const userData = snapshot.data();
        setFormData(prev => ({
          ...prev,
          fullName: userData.fullName,
          email: userData.email
        }))
      });

  }, []);

  const onChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const submitFunc = async (e) => {
    e.preventDefault();
  }

  const editFunc = async (e) => {
    e.preventDefault();
    setEditNameControl(false);
  }

  const applyChangeFunc = async (e) => {
    e.preventDefault();
    await updateDoc(doc(database, 'users', auth.currentUser.uid), {fullName: fullName})
    await updateProfile(auth.currentUser, {
      displayName: fullName
    })
    toast.info('Your name were changed!');
    setEditNameControl(true);
  }

  const signOutFunc = async () => {
    await signOut(auth);
    toast.success('Successfully signed out');
  }

  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-4'>My Profile</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='w-full md:w-[67%] lg:w-[40%]'>
          <form>
            <input type="text" id='fullName' className={`w-full bg-white border-2 mb-4 h-12 p-2 ${!editNameControl&&'bg-red-300'}`} disabled={editNameControl} defaultValue={fullName} onChange={onChange} placeholder='Full name' />
            <input type="email" id='email' className='w-full bg-white border-2 mb-4 h-12 p-2' disabled defaultValue={email} onChange={onChange} placeholder='Email address' />
            <div className='flex justify-between mt-4 mb-8'>
              <p className='p-0 m-0 font-semibold'>Do you want to change your name? <button onClick={editNameControl?editFunc:applyChangeFunc} className='text-red-600'>{editNameControl?'edit':'apply change'}</button></p>
              <button onClick={signOutFunc} className='text-blue-600 font-semibold'>Sign out</button>
            </div>
            <button className='w-full text-white bg-blue-600 font-semibold py-3 text-sm hover:bg-blue-700' onClick={submitFunc}>
              <FcHome className='inline-block relative -top-0.5 text-lg mr-2 bg-white rounded-full' />
              SELL OR RENT YOUR HOME
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile