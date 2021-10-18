import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-primary py-4'>
            <div className="container">
                <div className="row text-white">

                    {/* our location */}
                    <div className="col-md-4 d-flex justify-content-center align-items-center d-flex">
                        <span style={{ fontSize: '40px' }}><i className="fas fa-map-marker-alt"></i></span>
                        <p className="ms-2 fw-bolder">H#102(1st floor), Road #06, <br />Biram Pur, Dinajpur</p>
                    </div>

                    {/* footer quick link */}
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <div className='quick-link '>
                            <Link to="/home" className="text-white ">
                                <i className="fas fa-home"></i> <span>Home</span>
                            </Link>
                            <br />
                            <Link to="/services" className="text-white ">
                                <i className="fas fa-stethoscope"></i> <span>Services</span>
                            </Link>
                            <br />

                            <Link to="/" className="text-white ">
                                <i className="fas fa-plus-square"></i> <span>Booking</span>
                            </Link>
                            <br />
                            <Link to="/" className="text-white ">
                                <i className="fas fa-search-plus"></i> <span>Find a Clinic</span>
                            </Link>
                        </div>
                    </div>

                    {/* footer about */}
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>We have more than 30 practices and 300 allied health professionals across the country. Whether you’re an elite athlete or hoping to alleviate every day pain, we can support each step of your journey towards improved and injury-free movement</p>

                        <div className='d-flex justify-content-evenly' style={{ fontSize: '2em' }}>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-whatsapp'></i>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div className='text-center pt-2'>
                    <p className='text-light'>
                        Copyright &copy; 2021 <span className='fw-bold'>Life-Care Hospital</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;