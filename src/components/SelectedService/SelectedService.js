import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SelectedService = () => {
    const{id}=useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])

    const selectedService=services.find(service=>service.id===parseInt(id))
    console.log(selectedService);

    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
};

export default SelectedService;