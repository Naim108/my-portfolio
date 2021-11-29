import React from 'react';
import {  Container, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
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
    <NavHashLink activeClassName="selected" className="nav-bar" to="/home#projects">Projects</NavHashLink>
    <NavHashLink activeClassName="selected" className="nav-bar" to="/home#blogs">Blogs</NavHashLink>
    <NavHashLink activeClassName="selected" className="nav-bar" to="/home#contact">Contact Me</NavHashLink>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            
        </>
    );
};

export default Header;