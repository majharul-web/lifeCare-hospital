import React from 'react';
import { Link } from 'react-router-dom';
import advanceImg from '../../../../images/advance.jpg'

const Advance = () => {
    return (
        <div className='pb-5 container'>
            <h3 className='text-primary py-3'>Advanced healthcare</h3>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src={advanceImg} className='img-fluid w-100' alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='px-5 d-flex flex-column align-content-center'>
                        <h3 className='text-primary py-3'>Advanced healthcare. Advancing lives.</h3>
                        <p >
                            <span className='fw-bold'>Dedicated specialists. With you every step of the way.</span>
                            <br />
                            At Olathe Health, we provide state-of-the-art care for complex cardiovascular conditions. Treat cancer with expertise, and compassion. Perform innovative orthopedic procedures. And lead the way with a new spine surgery program. Because changing lives with advanced specialty care is what drives us, one patient at a time
                        </p>
                        <Link to='/'>
                            Find a specialist
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Advance;