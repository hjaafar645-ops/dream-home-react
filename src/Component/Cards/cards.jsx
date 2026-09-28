import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { propertyContext } from "../../Pages/context/propertyContext";
import "../Cards/cards.css"

function Cards({ properties }) {

  /*========== Context ==========*/
  const { toggleFavorite, favorites, compareList, addToCompare } = useContext(propertyContext);

  /*========== Navigate ==========*/
  const navigate = useNavigate();

  /*========== ScrollToTop ==========*/
  const scrollToTop = () => {
    window.bootstrap?.Offcanvas?.getInstance(document.getElementById('loginOffcanvas'))?.hide();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="properties-section">
      <div className="properties-grid">
        {properties.map((property) => {
          const isFavorite = favorites?.some((item) => item.id === property.id);
          const isCompared = compareList?.some((item) => item.id === property.id);
          return (
            <article key={property.id} className="property-item-card">
              <div className="card">

                <div className="card-image">
                  <img src={property.img} alt={property.title} className="card-img-top image-card" />
                  <button
                    className={`card-favorite-btn ${isFavorite ? "active-heart" : ""}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      toggleFavorite(property);
                    }}
                    title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                  >
                    <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                  </button>
                </div> {/*===== card-image =====*/}

                <div className="card-body">

                  <div className="card-header-row">
                    <h3 className="card-title">
                      <i className="fa fa-quote-left"></i> {property.title}
                    </h3>

                    <div className="card-action-buttons-box">
                      <button
                        className={`card-compare-action-btn ${isCompared ? "active-compare" : ""}`}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation(); 
                          addToCompare(property); 
                        }}
                        title="Add to Compare"
                      >
                        <i className="bi bi-arrow-left-right"></i>
                      </button>

                      <button
                        className="card-explore-circle-btn"
                        onClick={() => {
                          scrollToTop();
                          navigate(`/PropertiesDetails/${property.id}`);
                        }}
                        title="View Details"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </button>
                    </div> {/*===== card-action-buttons-box =====*/}

                  </div> {/*===== card-header-row =====*/}

                  <p className="card-location">
                    <i className="bi bi-geo-alt-fill"></i> {property.location}
                  </p>

                  <div className="price-tags">
                    {property.salePrice && (
                      <p className="price-details price-sale">For Sale: <span>{property.salePrice}</span></p>
                    )}
                    {property.rentPrice && (
                      <p className="price-details price-rent">For Rent: <span>{property.rentPrice}</span></p>
                    )}
                    {property.mortgagePrice && (
                      <p className="price-details price-mortgage">For Mortgage: <span>{property.mortgagePrice}</span></p>
                    )}
                  </div> {/*===== price-tags =====*/}

                  <div className="card-specs">
                    <div className="spec-item" title="Bedrooms">
                      <i className="fa fa-bed"></i> <span>{property.bedrooms}</span>
                    </div>
                    <div className="spec-item" title="Bathrooms">
                      <i className="fa fa-bath"></i> <span>{property.bathroom || 2}</span>
                    </div>
                    <div className="spec-item" title="Floors">
                      <i className="fa fa-building"></i> <span>{property.floors || 1}</span>
                    </div>
                  </div> {/*===== card-specs =====*/}

                </div>
              </div> {/*===== card =====*/}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Cards;
