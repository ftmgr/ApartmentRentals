import React from 'react';
import Logo from '../assets/rental-logo.jpg;

const Navbar = ({ adminMode, toggleAdminMode }) => {
    return (
        <div>
            <nav>
                <img src={logo} class="logo"/>
                <ul>
                <button>
                    <li>Home</li>
                    </button><button>
                    <li>About</li>
                     </button> <button>
                    <li>Contact</li>
                    </button>
                    <button>
                    {adminMode && <li onClick={toggleAdminMode}>Exit Admin Mode</li>}
                    </button>
        
                </ul>
                
            </nav>
        </div>
    );
};

export default Navbar;