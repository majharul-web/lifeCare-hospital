import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const About = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("/Doctor.json")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);
   

    return (
        <section>
            <div>
                <h3 className='text-capitalize py-4 text-center'>
                    about Life-Care Hospital
                </h3>
            </div>

            <div className="container">

                <p>
                    <strong>Life Care</strong> started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service, Life Care became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.
                </p>
                <div>
                    <h3 className='text-primary my-5 '>Our Specialist Doctor</h3>
                    <div className='row'>
                        {
                            doctors?.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;