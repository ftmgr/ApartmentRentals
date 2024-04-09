import React from 'react';
import rentalLogo2 from '../assets/rental-logo2.jpg'

const Navbar = ({ adminMode, toggleAdminMode }) => {
    return (
        <div>
          <body class="navBody">
          <nav>
      <div class="container-fluid">
       <img src={rentalLogo2} className="rentalLogo2" alt="App rentalLogo2" />
        <a class="navbar-brand" href="#"></a>

        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <ul class="menu">
          
            <li><a href="#">Home</a></li>
            <ul class= "submenu">
              <li><a href="#">Apartments</a></li>
              <li><a href="#">Favorites</a></li>
            </ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
            
            <li><a href='#'>Disable</a></li>
        </ul>
      </div>
            </nav>
            </body>
        </div>
    );
};

export default Navbar;