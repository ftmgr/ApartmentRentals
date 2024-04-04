import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';
import './App.css'

const App = () => {
  const [apartments, setApartments] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [adminMode, setAdminMode] = useState(false);

  const toggleAdminMode = () => {
    setAdminMode(!adminMode);
  };

  const addApartment = (newApartment) => {
    setApartments([...apartments, newApartment]);
  };

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
        addApartment={addApartment}
        deleteApartment={deleteApartment}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      <Footer />
    </div>
  );
};

export default App;