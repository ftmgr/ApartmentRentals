import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import rentalsJson from './assets/rentals.json';
import './App.css'


function App() {
  const [apartments, setApartments] = useState(rentalsJson);
  const [favorites, setFavorites] = useState([]);
  const [adminMode, setAdminMode] = useState(true);

  const toggleAdminMode = () => {
    setAdminMode(!adminMode);
  };

  // const addApartment = (newApartment) => {
  //   setApartments([...apartments, newApartment]);
  // };

  const deleteApartment = (id) => {
    setApartments(apartments.filter(apartment => apartment.id !== id));
  };

  const addToFavorites = (id) => {
    const apartmentToAdd = apartments.find(apartment => apartment.id === id);
    setFavorites([...favorites, apartmentToAdd]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(apartment => apartment.id !== id));
  };

  return (
    <div>
      <Navbar adminMode={adminMode} toggleAdminMode={toggleAdminMode} />
      <Sidebar />
      <Content
        apartments={apartments}
        favorites={favorites}
        adminMode={adminMode}
        deleteApartment={deleteApartment}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites} />
      <Footer />
    </div>
  );
}

export default App;