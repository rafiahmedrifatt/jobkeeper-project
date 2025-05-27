import Lottie from 'lottie-react';
import React from 'react';
import loading from '../assets/loader.json'

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie className='w-60' animationData={loading} loop={true}></Lottie>
        </div>
    )
};

export default Loader;