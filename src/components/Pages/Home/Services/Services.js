import React, { useEffect, useState } from 'react';
import esg from '../../../../images/banner.jpg'
import Service from '../Service/Service';

const Services = () => {
    const allServices=[
        {
            id:1,
            service:'ECG',
            doctor:'Md Rasel Ahmed',
            image:{esg},
            price:200
        },
        {
            id:2,
            service:'City Scan',
            doctor:'Md Sarif Ahmed',
            image:{esg},
            price:250
        },
        {
            id:3,
            service:'Altrasonogram',
            doctor:'Md Rubel Mia',
            image:{esg},
            price:110
        },
        {
            id:4,
            service:'Delivery',
            doctor:'Miss Tahera Khatun',
            image:{esg},
            price:300
        },
        {
            id:5,
            service:'Blood Test',
            doctor:'Md Ali khan',
            image:{esg},
            price:80
        },
        {
            id:6,
            service:'Urin Test',
            doctor:'Md Rubel Ahmed',
            image:{esg},
            price:70
        }
    ];

   /*  const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, []) */

    return (
        <div className='container'>
            
            <div className='row'>
                {
                    allServices.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;