import React from 'react';
import logo from '../assets/rental-logo.jpg';

const Navbar = ({ adminMode, toggleAdminMode }) => {
    return (
        <div>
            <nav>
                <img src={logo} class="logo" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    {adminMode && <li onClick={toggleAdminMode}>Exit Admin Mode</li>}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;