import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyContext } from '../../Pages/context/propertyContext'; 
import './Preview.css'; 

function Preview() {

  /*========== ForContext ==========*/
  const { setSearch, scrollToTop } = useContext(propertyContext);

  /*========== Navigate ==========*/
  const navigate = useNavigate();

  /*========== HandleClick/ForScroll ==========*/
  const handleDistrictClick = (districtName) => {
    setSearch(districtName);
    if (typeof scrollToTop === 'function') {
      scrollToTop(); 
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    navigate('/Properties'); 
  };

  return (
    <section className="preview-component">
      <div className="preview-container">
        
        <div className="preview-header">
          <span className="preview-badge">Explore Elite London Districts</span>
          <h2 className="preview-main-title">Our Premium Destinations</h2>
        </div> {/*===== preview-header =====*/}

        <div className="location-grid">
          
          <article className="location-card" onClick={() => handleDistrictClick("Chelsea")}>
            <div className="card-bg">
              <img src="/Images/modernVilla.jpg" alt="Chelsea District" className="preview-card-img" loading="eager" decoding="sync" />
            </div>
            <div className="card-glass-overlay"></div>
            <div className="card-info-content">
              
              <div className="preview-card-text">
                <h3 className="preview-card-title">Chelsea</h3>
                <p className="preview-card-subtitle">Exclusive Mansions & Estates</p>
              </div>
              
              <button className="preview-circle-btn" type="button" title="Explore Chelsea">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div> {/*===== card-info-content =====*/}
          </article> {/*===== location-card =====*/}

          <article className="location-card" onClick={() => handleDistrictClick("Kensington")}>
            <div className="card-bg">
              <img src="/Images/WhiteLuxuryVilla.jpg" alt="Kensington District" className="preview-card-img" loading="eager" decoding="sync" />
            </div>
            <div className="card-glass-overlay"></div>
            <div className="card-info-content">
              
              <div className="preview-card-text">
                <h3 className="preview-card-title">Kensington</h3>
                <p className="preview-card-subtitle">Luxury Waterfront Penthouses</p>
              </div>
              
              <button className="preview-circle-btn" type="button" title="Explore Kensington">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div> {/*===== card-info-content =====*/}
          </article> {/*===== location-card =====*/}

          <article className="location-card" onClick={() => handleDistrictClick("Westminster")}>
            <div className="card-bg">
              <img src="/Images/modernStudio.jpg" alt="Westminster District" className="preview-card-img" loading="eager" decoding="sync" />
            </div>
            <div className="card-glass-overlay"></div>
            <div className="card-info-content">
              
              <div className="preview-card-text">
                <h3 className="preview-card-title">Westminster</h3>
                <p className="preview-card-subtitle">Premium Skyline Apartments</p>
              </div>
              
              <button className="preview-circle-btn" type="button" title="Explore Westminster">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div> {/*===== card-info-content =====*/}
          </article> {/*===== location-card =====*/}

        </div> {/*===== location-grid =====*/}

      </div>
    </section>
  );
}

export default Preview;
