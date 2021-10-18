import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h2 className=' banner-title text-capitalize display-2 fw-bold text-danger text-center '>
            Welcome to <span className='text-info'>Life-Care</span> <br /> Hospital
          </h2>
        </div>
    );
};

export default Banner;