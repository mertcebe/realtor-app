import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import database, { auth, provider } from '../firebase/firebaseConfig';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

const OAuth = ({disabled}) => {
    const navigate = useNavigate();
    const signinFunc = async (e) => {
        e.preventDefault();
        const credentials = await signInWithPopup(auth, provider);

        const docSnap = await getDoc(doc(database, 'users', credentials.user.uid));
        if(!docSnap.exists()){
            setDoc(doc(database, 'users', credentials.user.uid), {
                fullName: credentials.user.displayName,
                email: credentials.user.email,
                timestamp: serverTimestamp()
            })
        }

        navigate('/');
    }
    return (
        <button className='w-full text-white bg-red-600 font-semibold py-3 text-sm hover:bg-red-700' onClick={signinFunc} disabled={disabled}>
            <FcGoogle className='inline-block relative -top-0.5 text-lg mr-2 bg-white rounded-full' />CONTINUE WITH GOOGLE
        </button>
    )
}

export default OAuth