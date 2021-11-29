import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <>
        <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Link className="nav-bar" to="/home">Md Naim Hossain</Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Link className="nav-bar" to="/home">Home</Link>
    <Link className="nav-bar" to="/contact">Projects</Link>
    <Link className="nav-bar" to="/contact">Blogs</Link>
    <Link className="nav-bar" to="/contact">Contact Me</Link>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            
        </>
    );
};

export default Header;