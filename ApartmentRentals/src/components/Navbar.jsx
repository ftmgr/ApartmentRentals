import React from 'react';

import rentalLogo2 from '../assets/rental-logo2.jpg'
import { Link } from 'react-router-dom';

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
          
          <li> <Link to="/" className="link">Home</Link> </div>);}> Home </Link> </li>
          <ul class= "submenu">
              <li> <Link to ="/Apartments" className="link"> Apartments </Link> </li>
              <li> <Link to "/Favorites" className="link">  Favorites </Link> </li>
          </ul>
          <li> <Link to="/About" className="link"> About </Link> </li>
          <li> <Link to="/Contact" className="link"> Contact </Link> </li>
          <li> <Link to="/Admin" className="link"> {adminMode && <li onClick={toggleAdminMode}>Exit Admin Mode</li>} </Link> </li>
        </ul>
      </div>
    </nav>
</body>       
</div>
);
};

export default Navbar;