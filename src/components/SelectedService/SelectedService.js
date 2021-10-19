import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SelectedService = () => {

    const { id } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])

    

    const selectedService = services.find(service => service.id === parseInt(id))
    console.log(selectedService);
    const { service, doctor, price,image } = selectedService;

    return (
        <div className='container p-5'>
            {/* selected items */}
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center align-items-center border-3'>
                    <div>
                        <h3>{service}</h3>
                        <p>{doctor}</p>
                        <article>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit laboriosam soluta officia deserunt possimus hic odio voluptates quae, sequi, veritatis illo facilis minima quod! Inventore repellendus obcaecati molestiae, reiciendis temporibus optio rem natus itaque facilis sit officia laudantium nesciunt doloremque perspiciatis voluptas minus tempora eligendi rerum sequi impedit quia?
                        </article>
                        <h3>${price}</h3>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <img src={image} className='img-fluid w-100 img-thumbnail' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedService;