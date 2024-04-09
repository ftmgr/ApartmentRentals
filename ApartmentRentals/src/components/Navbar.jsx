import React from 'react';
import logo from '../assets/rental-logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ adminMode, toggleAdminMode }) => {
    return (

        <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50" style={{ display: "flex", flexDirection: "row" }}>
            <div className="flex justify-between h-20 items-center px-4">
                <div className="flex items-center space-x-2 w-1/4">
                    <Link to="/">
                        <button className="flex items-center text-l py-1">
                            <img src={logo} alt="Logo" className="logo" />
                        </button>
                    </Link>
                    <ul>
                        <li> <Link to="/"> Home </Link></li>
                        <li> <Link to="/About"> About </Link></li>
                        <li> <Link to="/Contact"> Contact </Link> </li>
                        <li> <Link to="/Admin"> {adminMode && <li onClick={toggleAdminMode}>Exit Admin Mode</li>} </Link> </li>
                    </ul>
                </div>

            </div>
        </nav>

    );
};

export default Navbar;