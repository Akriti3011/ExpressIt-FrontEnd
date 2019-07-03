import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import "../assets/styles/navigation.css";
import logo from "../assets/icons/logo.png";
import "../assets/styles/basic.css";

class Navigation extends Component {
    render(){
        return(
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/home"><img src={logo} className="brand-logo d-inline-block align-top" 
                alt="ExpressIt Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/discuss">Discuss</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigation;