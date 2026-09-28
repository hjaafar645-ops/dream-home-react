import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertyContext } from '../context/propertyContext';
import './propertiesDetails.css';

function PropertiesDetails() {

  /*========== Context ==========*/
  const { properties, scrollToTop } = useContext(propertyContext);

  /*========== Paramas/Details ==========*/
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (properties) {
      const foundProperty = properties.find(p => p.id === Number(id) || p.id === id);
      setProperty(foundProperty);
    }
  }, [id, properties]);

  if (!property) {
    return (
      <main className="details-loading-gate">
        <p className="loading-text"> Gathering elite architectural data... </p>
      </main>
    );
  }

  /*========== HandleClick/ForScroll ==========*/
  const handleDistrictClick = () => {
    if (typeof scrollToTop === 'function') {
      scrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <article className="details-page">

      <section className="details-hero-gallery">
        <img src={property.img} alt={property.title} className="gallery-main-img" />
        <div className="gallery-overlay"></div>
        <div className="gallery-info">
          <span className="badge-location"><i className="bi bi-geo-alt-fill"></i> {property.location}</span>
          <h1 className="details-main-title">{property.title}</h1>
        </div>
      </section> {/*===== details-hero-gallery =====*/}

      <div className="details-container">

        <section className="action-ribbon">
          <div className="ribbon-price-zone">
            {property.salePrice && <p className="ribbon-price">Investment: <span>{property.salePrice}</span></p>}
            {property.rentPrice && <p className="ribbon-price">Rental: <span>{property.rentPrice}</span></p>}
            {property.mortgagePrice && <p className="ribbon-price">Mortgage: <span>{property.mortgagePrice}</span></p>}
          </div>

          <button
            className="ribbon-booking-btn"
            type="button"
            onClick={() => {
              const desktopBtn = document.querySelector('.desktop-action-btn');
              if (desktopBtn) desktopBtn.click();
            }}
          >
            <i className="bi bi-calendar2-check-fill me-2"></i> Book VIP Tour
          </button>
        </section> {/*===== action-ribbon =====*/}

        <section className="block-lux">
          <h2 className="title-lux">Architectural Overview</h2>
          <p className="subtitle-lux">
            {property.description}
          </p>
        </section> {/*===== block-lux =====*/}

        <section className="block-lux">
          <h2 className="title-lux">Property Specifications</h2>
          <div className="specs-row-full">
            
            <div className="specs-card">
              <i className="bi bi-door-open-fill"></i>
              <div className="spec-text">
                <h3>{property.bedrooms}</h3>
                <p>Premium Bedrooms</p>
              </div>
            </div>
            
            <div className="specs-card">
              <i className="bi bi-droplet-fill"></i>
              <div className="spec-text">
                <h3>{property.bathroom || 2}</h3>
                <p>Luxury Bathrooms</p>
              </div>
            </div>
            
            <div className="specs-card">
              <i className="bi bi-layers-half"></i>
              <div className="spec-text">
                <h3>{property.floors || 1}</h3>
                <p>Total Floors</p>
              </div>
            </div>

          </div>
        </section> {/*===== block-lux =====*/}

        <div className="footer-zone">
          <Link to="/Properties" className="details-back-btn-full" onClick={handleDistrictClick}>
            <i className="bi bi-arrow-left"></i> Back To Curated Properties
          </Link>
        </div>

      </div> {/*===== details-container =====*/}
    </article>
  );
}

export default PropertiesDetails;
