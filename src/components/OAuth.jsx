import React from 'react'
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
    return (
        <button className='w-full text-white bg-red-600 font-semibold py-3 text-sm hover:bg-red-700'>
            <FcGoogle className='inline-block relative -top-0.5 text-lg mr-2 bg-white rounded-full' />CONTINUE WITH GOOGLE
        </button>
    )
}

export default OAuth