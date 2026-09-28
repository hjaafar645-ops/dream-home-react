import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyContext } from '../context/propertyContext';
import './Favorites.css';

function Favorites() {

  /*========== Context ==========*/
  const { favorites, toggleFavorite, scrollToTop } = useContext(propertyContext);

  /*========== Navigate ==========*/
  const navigate = useNavigate();

  /*========== Handle-Remove ==========*/
  const handleRemove = (e, property) => {
    e.stopPropagation();
    toggleFavorite(property);
  };

  /*========== Empty-Favorite ==========*/
  if (!favorites || favorites.length === 0) {
    return (
      <main className="fav-empty-gate">
        <div className="fav-empty">
          <div className="fav-empty-icon">
            <i className="bi bi-heartbreak-fill"></i>
          </div>
          <h2>Your Collection is Empty</h2>
          <p>You haven't curated any elite residences yet. Explore our avenues to save your masterpieces.</p>
          <button
            className="fav-explore-btn"
            onClick={() => {
              scrollToTop();
              navigate('/Properties');
            }}
          >
            Explore Curated Properties
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="favorites-page">
      <div className="fav-page-container">
        <div className="fav-header">
          <span className="fav-badge">Your Curated Aura Portfolio</span>
          <h1 className="fav-main-title">VIP Private Collection</h1>
          <span className="fav-title-line"></span>
        </div>

        <div className="fav-cards">
          {favorites.map((property) => (
            <article
              key={property.id}
              className="fav-lux-card"
              onClick={() => {
                scrollToTop();
                navigate(`/PropertiesDetails/${property.id}`);
              }}
            >
              <div className="fav-card-img">
                <img src={property.img} alt={property.title} className="fav-card-image" />

                <button
                  className="fav-delete-btn"
                  type="button"
                  onClick={(e) => handleRemove(e, property)}
                  title="Remove from favorites"
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </div>

              <div className="fav-card-body">
                <div className="fav-header-row">
                  <h3 className="fav-item-title">{property.title}</h3>
                  <span className="fav-item-location"><i className="bi bi-geo-alt-fill"></i> {property.location}</span>
                </div>

                <div className="fav-price">
                  <p>Investment Value: <span>{property.salePrice || property.rentPrice || property.mortgagePrice}</span></p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div> 
    </main>
  );
}

export default Favorites;
