function FavoritesList({ favorites }) {

    return (
        <div className="FavoritesList">
            <h2>Favorites</h2>

            <div className="list">
                {favorites && favorites.map((apartment) => (
                    <div className="FavoritePlanCard" key={apartment.id}>
                        <div className="top-section">
                            <img src={apartment.image} />
                        </div>
                        <div className="bottom-section">
                            <h2 className="favorites" style={{ display: 'block' }}>
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
                            </h2>
                            <p>

                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default FavoritesList;