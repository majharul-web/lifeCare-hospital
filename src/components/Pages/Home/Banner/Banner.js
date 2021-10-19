import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h2 className=' banner-title text-capitalize display-4 fw-bold text-danger text-center '>
                Welcome to <span className='text-info'>Life-Care</span> <br /> Hospital
            </h2>
            <h4 className='text-center text-info pt-4'>We’re here to help you get better, feel better, and stay better.</h4>

        </div>
    );
};

export default Banner;