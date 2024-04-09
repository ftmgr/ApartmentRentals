import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import rentalsJSON from './assets/rentals.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import './App.css'

//ListItem and List usage? How? Why do I need this?
/*const List = ({ data }) => {
  const [items, setItems] = useState(data);

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} index={index} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, index, onDelete }) => {
  // Conditionally rendering content based on properties or conditions
  let content = null;
  if (item.isCompleted !== undefined) {
    content = item.isCompleted ? '✅' : '❌';
  } else {
    content = item.value > 10 ? 'High' : 'Low';
  }

  return (
    <li>
      {content}
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );

   <div>
              <h1>List Component</h1>
              <List data={rentalsJSON} />
            </div>
};
 */

const App = () => {
  const [apartments, setApartments] = useState(rentalsJSON);
  const [favorites, setFavorites] = useState([]);
  const [adminMode, setAdminMode] = useState(true);

  const toggleAdminMode = () => {
    setAdminMode(!adminMode);
  };

  /* const addApartment = (newApartment) => {
     setApartments([...apartments, newApartment]);
   }; */

  const deleteApartment = (id) => {
    setApartments(apartments.filter(apartment => apartment.id !== id));
  };

  const addToFavorites = (id) => {
    const apartmentToAdd = apartments.find(apartment => apartment.id === id);
    setFavorites([...favorites, apartmentToAdd]);
  };

  const removeFromFavorites = (id) => { // ?
    setFavorites(favorites.filter(apartment => apartment.id !== id));
  };

  return (
    <>
      <Router>
        <div className="App relative z-20 pt-20">
          <Navbar adminMode={adminMode} toggleAdminMode={toggleAdminMode} />
          <div className="container">
            <Sidebar />
            <Content
              apartments={apartments}
              favorites={favorites}
              adminMode={adminMode}

              deleteApartment={deleteApartment}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
            <Routes>
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route path="/item/:id" component={ItemDetailsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path='' component={NotFoundPage} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;