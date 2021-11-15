import React from 'react';
import logo from '../../logo.png'
import './Header.css'
import { Container, Nav, NavDropdown, Navbar, button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = (props) => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" >
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                        <img src={logo} alt="logo" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/booking-form'>Booking</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#Specialities">Specialities</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#Doctor">Doctor List</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">Working Process </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about-us">About Us </Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact Us </Nav.Link>
                            <Nav.Link as={HashLink} to="/my-profile">{user?.displayName}</Nav.Link>
                            {
                                user?.email ? <button className="btn btn-success m-4" onClick={logout}>log out</button> : <Nav.Link as={Link} to='/login' >Login/Sign Up</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;