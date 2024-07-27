import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    const pathMathRoute = (route) => {
        if(route == location.pathname){
            return true;
        }
        return false;
    }
    return (
        <div className='flex justify-between  h-16 px-20 xl:px-56 lg:px-40 overflow-hidden shadow-md bg-white'>
            <div className='w-24 flex justify-center items-center'>
                <Link to={'/'}><img src="realtor-icon.png" alt="realtor.com" /></Link>
            </div>
            <div className='flex'>
                <Link to="/" className={`flex items-center font-bold text-sm mr-10 text-gray-400 hover:text-gray-700 transition-all ${pathMathRoute('/')&&'text-gray-950 border-b-2 border-b-red-600'}`}>Home</Link>
                <Link to={"/offers"} className={`flex items-center font-bold text-sm mr-10 text-gray-400 hover:text-gray-700 transition-all ${pathMathRoute('/offers')&&'text-gray-950 border-b-2 border-b-red-600'}`}>Offers</Link>
                <Link to={"/sign-in"} className={`flex items-center font-bold text-sm text-gray-400 hover:text-gray-700 transition-all ${pathMathRoute('/sign-in')&&'text-gray-950 border-b-2 border-b-red-600'}`}>Sign in</Link>
            </div>
        </div>
    )
}

export default Header