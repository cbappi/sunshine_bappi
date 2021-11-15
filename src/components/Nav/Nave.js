import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Nave = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Prime Car Sales</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explors">Explore more</Nav.Link>

                        

                        <Nav.Link as={Link} to="/about">About us</Nav.Link>


                        {user?.email ?
                            <div className="row d-flex align-items-center ">
                                <div className="col-md-6"> <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link></div>
                                <div  className="col-md-4">
                                    <Button onClick={logout} variant="light">Logout</Button>
                                </div>
                             
                               
                               
                            </div> :


                            <Nav.Link as={Link} to="/login">Login</Nav.Link>


                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>




                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Nave;