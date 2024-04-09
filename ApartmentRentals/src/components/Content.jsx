import React from 'react';
import FavoritesList from './FavoriteLists';;
//  <FavoritesList favorites={favorites} />

const Content = ({
    apartments,
    favorites,
    adminMode,
    deleteApartment,
    addToFavorites,
    removeFromFavorites
}) => {
    if (!Array.isArray(apartments)) {
        console.error('Apartments is not an array');
        return null; // or some other appropriate action
    }


    return (
        <div>
            <main>
                <h1>Rental Houses</h1>
                <div className="ApartmentCard" >
                    {apartments.map(apartment => (
                        <div className="apartmentList" key={apartment.id} style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', margin: '3rem' }}>
                            <h2>{apartment.name}</h2>

                            <img class="fit-picture" src={apartment.picture_url.url} alt="The image of an apartment" />

                            <p>{apartment.description}</p>

                            {adminMode && (
                                <button onClick={() => deleteApartment(apartment.id)}>
                                    Delete
                                </button>
                            )}
                            <button onClick={() => {
                                addToFavorites(apartment.id)
                                console.log("added to the favorites..")

                            }}>

                                Add to Favorites

                            </button>

                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Content;