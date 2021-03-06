import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { id, doctor, image, service,discription } = props.service;

    return (
        <div className='col-md-4 col-sm-6 my-3'>
            <div className='py-2 service-shadow'>
                <div className='text-center my-4'>
                    <img src={image} alt='' className='img-fluid w-75 img-thumbnail' />
                </div>
                <div className='text-center my-3'>
                    <h5>{service}</h5>
                    <h4>Doctor:{doctor}</h4>
                    <p className='px-3'>{discription}</p>
                    <Link to={`service/${id}`}>
                        <button className='btn btn-danger'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;