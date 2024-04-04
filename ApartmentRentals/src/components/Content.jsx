import React from 'react';

const Content = ({
    apartments,
    favorites,
    adminMode,
    addApartment,
    deleteApartment,
    addToFavorites,
    removeFromFavorites
}) => {
    return (
        <div>
            <main>
                <h1>Rental Houses</h1>
                <div>
                    {apartments.map(apartment => (
                        <div key={apartment.id}>
                            <h2>{apartment.name}</h2>
                            <p>{apartment.description}</p>
                            {adminMode && (
                                <button onClick={() => deleteApartment(apartment.id)}>
                                    Delete
                                </button>
                            )}
                            <button onClick={() => addToFavorites(apartment.id)}>
                                Add to Favorites
                            </button>
                        </div>
                    ))}
                </div>
                {favorites.length > 0 && (
                    <div>
                        <h2>Favorites</h2>
                        {favorites.map(apartment => (
                            <div key={apartment.id}>
                                <h3>{apartment.name}</h3>
                                <button onClick={() => removeFromFavorites(apartment.id)}>
                                    Remove from Favorites
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Content;