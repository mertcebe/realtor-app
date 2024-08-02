import React from 'react'
import spinnerGif from '../images/spinnerGif.gif'

const Spinner = () => {
    return (
        <div className='w-full h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm z-10'>
            <img src={spinnerGif} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80' alt="loading" />
        </div>
    )
}

export default Spinner