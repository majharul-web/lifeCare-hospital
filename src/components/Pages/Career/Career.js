import React from 'react';
import { Link } from 'react-router-dom';
import careerImg from '../../../images/Careers.jpg'

const Career = () => {
    return (
        <div className='py-5'>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src={careerImg} className='img-fluid w-100' alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='px-5 flex-column '>
                        <h3 className='text-primary py-3'>Join our nursing team. Get a sign-on bonus!</h3>
                        <p >
                            We’re looking for professionals with heart! A career at Olathe Health is one that is filled with promise, collaboration, advancement and a commitment toward inspiring hope and  improving the health of our patients and community—one person at a time. We invite you to apply for one our positions online..
                        </p>
                        <Link to='/'>
                            Search Open Positions
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Career;