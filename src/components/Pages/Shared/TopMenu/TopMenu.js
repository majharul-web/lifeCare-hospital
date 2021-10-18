import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo/main-logo.png'

const TopMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Brand href="#home">
                        <Link to='home'>
                            <img src={logo} className='img-fluid w-100' alt="" />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link as={Link}to="/home" active className='fw-bold  text-info mx-2'>Home</Nav.Link>
                            <Nav.Link href="#pricing" active className='fw-bold  text-info mx-2'>Services</Nav.Link>
                            <Nav.Link href="#pricing" active className='fw-bold  text-info mx-2'>About Us</Nav.Link>
                            <Nav.Link href="#pricing" active className='fw-bold  text-info mx-2'>Contact Us</Nav.Link>

                            <Button variant='danger' >Log In</Button>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default TopMenu;