import React from 'react';

const Navbar = ({ adminMode, toggleAdminMode }) => {
    return (
        <div>
            <nav>
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