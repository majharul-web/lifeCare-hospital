import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../images/logo/main-logo.png'

const TopMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className='img-fluid w-100' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopMenu;