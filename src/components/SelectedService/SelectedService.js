import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const SelectedService = () => {

    const { id } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    const selectedService = services.find(service => service.id === parseInt(id));

    return (
        <div className='container p-5'>
            {/* selected items */}
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center align-items-center border-3'>
                    <div>
                        <h3>{selectedService?.service}</h3>
                        <p className='fw-bold'>{selectedService?.doctor}</p>
                        <article>
                            {selectedService?.discription}
                        </article>
                        <h3 className='my-3 text-primary'>Cost: ${selectedService?.price}</h3>
                        <Button variant='danger'>Book</Button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <img src={selectedService?.image} className='img-fluid w-100 img-thumbnail' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedService;