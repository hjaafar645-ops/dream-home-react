import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyContext } from '../context/propertyContext';
import './Compare.css';

function Compare() {

  /*========== Context ==========*/
  const { compareList, removeFromCompare, scrollToTop } = useContext(propertyContext);

  /*========== Navigate ==========*/
  const navigate = useNavigate();

  /*========== Compare-Empte ==========*/
  if (!compareList || compareList.length === 0) {
    return (
      <main className="compare-empty-gate">
        <div className="compare-empty">
          <div className="compare-empty-icon">
            <i className="bi bi-arrow-left-right"></i>
          </div>
          <h2>No Properties Selected</h2>
          <p>
            Curate and add up to 3 premium residences from our
            avenues to execute a rigorous specifications comparison.
          </p>
          <button
            className="compare-explore-btn"
            onClick={() => {
              scrollToTop();
              navigate('/Properties');
            }}
          >
            Explore Masterpieces
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="compare-page">
      <div className="compare-page-container">

        <div className="compare-header">
          <span className="compare-badge">Rigorous Specifications Matrix</span>
          <h1 className="compare-title">Property Comparison</h1>
          <span className="compare-title-line"></span>
        </div>

        <div className="compare-table">
          <table className="compare-matrix-table">
            <thead>
              <tr>
                <th className="matrix-col">Bespoke Metrics</th>
                {compareList.map((property) => (
                  <th key={property.id} className="matrix-property-header">
                    <div className="matrix-image-box">
                      <img src={property.img} alt={property.title} />
                      <button
                        className="matrix-remove-btn"
                        type="button"
                        onClick={() => removeFromCompare(property.id)}
                        title="Remove from comparison"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div> {/* matrix-image-box */}
                    <h3 className="matrix-prop-title">{property.title}</h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className="matrix-col"><i className="bi bi-geo-alt-fill matrix-icon"></i> Location </td>
                {compareList.map((property) => (
                  <td key={property.id} className="matrix-data">{property.location}</td>
                ))}
              </tr>

              <tr>
                <td className="matrix-col"><i className="bi bi-cash-coin matrix-icon"></i> Price Value </td>
                {compareList.map((property) => (
                  <td key={property.id} className="matrix-data matrix-price-txt">
                    {property.salePrice || property.rentPrice || property.mortgagePrice}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="matrix-col"><i className="bi bi-door-open-fill matrix-icon"></i> Bedrooms </td>
                {compareList.map((property) => (
                  <td key={property.id} className="matrix-data">{property.bedrooms} Beds</td>
                ))}
              </tr>

              <tr>
                <td className="matrix-col"><i className="bi bi-droplet-fill matrix-icon"></i> Bathrooms</td>
                {compareList.map((property) => (
                  <td key={property.id} className="matrix-data">{property.bathroom || 2} Baths</td>
                ))}
              </tr>

              <tr>
                <td className="matrix-col"><i className="bi bi-layers-half matrix-icon"></i> Floors</td>
                {compareList.map((property) => (
                  <td key={property.id} className="matrix-data">{property.floors || 1} Floors</td>
                ))}
              </tr>

              <tr>
                <td className="matrix-col">Action Portal</td>
                {compareList.map((property) => (
                  <td key={property.id} className="matrix-data">
                    <button
                      className="matrix-view-details-btn"
                      onClick={() => {
                        scrollToTop();
                        navigate(`/PropertiesDetails/${property.id}`);
                      }}
                    >
                      View Architecture <i className="bi bi-arrow-up-right ms-1"></i>
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table> {/*===== compare-matrix-table =====*/}
        </div> {/*===== compare-table =====*/}

        {/*===== Compare/For-Mobile =====*/}
        <div className="compare-mobile-cards">
          {compareList.map((property) => (
            <article key={property.id} className="compare-mobile-lux-card">

              <div className="matrix-image-box">
                <img src={property.img} alt={property.title} />
                <button
                  className="matrix-remove-btn"
                  type="button"
                  onClick={() => removeFromCompare(property.id)}
                  title="Remove from comparison"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div> {/*===== matrix-image-box =====*/}

              <div className="compare-mobile-card-body">
                <h3 className="matrix-prop-title">{property.title}</h3>

                <div className="compare-mobile-list">
                  <div className="matrix-data"><i className="bi bi-geo-alt-fill matrix-icon"></i> {property.location}</div>
                  <div className="matrix-data matrix-price-txt"><i className="bi bi-cash-coin matrix-icon"></i> {property.salePrice || property.rentPrice || property.mortgagePrice}</div>
                  <div className="matrix-data"><i className="bi bi-door-open-fill matrix-icon"></i> {property.bedrooms} Beds</div>
                  <div className="matrix-data"><i className="bi bi-droplet-fill matrix-icon"></i> {property.bathroom || 2} Baths</div>
                  <div className="matrix-data"><i className="bi bi-layers-half matrix-icon"></i> {property.floors || 1} Floors</div>
                </div> {/*===== compare-mobile-list =====*/}

                <button
                  className="matrix-view-details-btn"
                  onClick={() => {
                    scrollToTop();
                    navigate(`/PropertiesDetails/${property.id}`);
                  }}
                >
                  View Architecture <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div> {/*=====compare-mobile-card-body =====*/}

            </article> 
          ))}
        </div> {/*===== compare-mobile-cards =====*/}

      </div>
    </main>
  );
}

export default Compare;
