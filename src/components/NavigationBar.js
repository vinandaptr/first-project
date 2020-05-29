import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: palevioletred;
}

.navbar-brand {
    color: pink;
    font-family: "Lucida Console", Courier, monospace;
    font-weight: bold;
    font-size: 20px;

    &:hover {
        color: white;
    }
}

a, .navbar-nav, .navbar-link {
    color: black;

    &:hover {
        color: white;
    }
}

`;

const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">vins-store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <NavLink to="/">Home
                        </NavLink>
                    </Nav.Item>
                    &nbsp;&nbsp;&nbsp;
                    <Nav.Item>
                        <NavLink to="/shop">Shop
                        </NavLink>
                    </Nav.Item>
                    &nbsp;&nbsp;&nbsp;
                    <Nav.Item>
                        <NavLink to="/about">About
                        </NavLink>
                    </Nav.Item>
                    &nbsp;&nbsp;&nbsp;
                    <Nav.Item>
                        <NavLink to="/contact">Contact
                        </NavLink>
                    </Nav.Item>
                    &nbsp;&nbsp;&nbsp;
                    <Nav.Item>
                        <NavLink to="/login">Login
                        </NavLink>
                    </Nav.Item>
                    &nbsp;&nbsp;&nbsp;
                    <Nav.Item>
                        <NavLink to="/user">User
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;