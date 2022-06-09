import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';


const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <Nav className='justify-contend-end'>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
    )
};

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="">Dashboard</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <AuthNav />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;