import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { singInUsingGoogle, userRegister, userLogin } = useAuth();

    // all state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState('');

    // get name
    const getName = (e) => {
        setName(e.target.value);
    }

    // get email
    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    // get password
    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    // handle checked 
    const handleChecked = (e) => {
        setIsRegister(e.target.checked);
    }

    // handle from submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        // password validation
        if (password.length < 6) {
            setError('please type 6 or longer password');
            return;
        }

        // manual user register/logIn process
        if (isRegister) {
            userLogin(email, password);
            setError('')
        }
        else {
            userRegister(email, password, name);
            setError('')
        }


    }


    // ------------------redirect
    const location = useLocation();
    const history = useHistory();

    // console.log("came from", location.state?.from);

    const redirect_url = location.state?.from || "/home";

    const handleGoogleSingIN = () => {
        singInUsingGoogle().then((result) => {
            history.push(redirect_url);
            // console.log(result.user);
        });
    };


    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-7">
                    <div className='w-75'>

                        <div className=''>
                            <h3 className='text-primary my-3 text-center'> {isRegister ? 'Please login' : 'Please Register'} </h3>

                            <Form className=' mx-auto' onSubmit={handleFormSubmit}  >

                                {/* name field */}
                                {!isRegister &&
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" onBlur={getName} placeholder="Enter Full Name" />
                                    </Form.Group>}


                                {/* email field */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onBlur={getEmail} placeholder="Enter email" />
                                </Form.Group>

                                {/* password field */}
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onBlur={getPassword} placeholder="Password" />
                                </Form.Group>

                                {/* check already register */}
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" onClick={handleChecked} label="Already Register?" />
                                </Form.Group>

                                {/* submit button */}
                                <div className="d-grid">
                                    <Button type="submit" variant="outline-danger" size="lg">
                                        {isRegister ? 'Login' : 'Register'}
                                    </Button>
                                </div>
                            </Form>
                        </div>

                        <p className='text-center my-2 text-danger ' >{error}</p>
                        <p className='text-center mt-2 text-primary fs-4'>or</p>

                        {/* social login */}
                        <div className="row my-3 ">
                            <div className="text-center my-2 ">
                                <Button variant="danger" onClick={handleGoogleSingIN}>
                                    <span className='mx-2'>
                                        <i className='fab fa-google'></i>
                                    </span>
                                    Google
                                </Button>
                            </div>                            
                        </div>
                    </div>

                </div>
                <div className="col-md-5 ">
                    <div className='d-none d-md-block'>
                        <img className='img-fluid w-100' src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg" alt="" />
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Login;