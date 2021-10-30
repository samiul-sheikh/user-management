import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">User Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addUser" className="nav-link me-3">Add User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link me-3">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;