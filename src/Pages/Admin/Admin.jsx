import React, { useContext, useState } from 'react';
import { propertyContext } from '../context/propertyContext'; 
import './Admin.css';

function Admin() {

  /*========== Context ==========*/
  const { properties, addProperty, deleteProperty, resetProperties } = useContext(propertyContext);

  /*========== Form-Data ==========*/
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    type: 'Sale', 
    bedrooms: '3',
    bathroom: '2',
    floors: '1',
    img: '/Images/modernVilla.jpg' 
  });

  /*========== Metrics-Computations ==========*/
  const totalCount = properties?.length || 0;
  const saleCount = properties?.filter(p => p.salePrice || p.type === 'Sale').length || 0;
  const rentCount = totalCount - saleCount;

  /*========== Handle-Input-Change ==========*/
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /*========== Handle-Form-Submit ==========*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.price) {
      alert("Please execute and fill all premium metrics required.");
      return;
    }

    const newVilla = {
      id: Date.now(), 
      title: formData.title,
      location: formData.location,
      img: formData.img,
      bedrooms: parseInt(formData.bedrooms),
      bathroom: parseInt(formData.bathroom),
      floors: parseInt(formData.floors),
      ...(formData.type === 'Sale' ? { salePrice: `$${formData.price}` } : { rentPrice: `$${formData.price}/mo` })
    };

    addProperty(newVilla);
    
    setFormData({
      title: '',
      location: '',
      price: '',
      type: 'Sale',
      bedrooms: '3',
      bathroom: '2',
      floors: '1',
      img: '/Images/modernVilla.jpg'
    });

    alert("Architectural Masterpiece Injected Successfully into AuraHomes portfolio!");
  };

  return (
    <main className="admin-dashboard">
      <div className="admin-page-container">
        
        <div className="admin-header">
          <span className="admin-badge">System Registry Backend</span>
          <h1 className="admin-title">Aura Control Center</h1>
          <span className="admin-title-line"></span>
          
          <button 
            className="admin-reset-system-btn" 
            type="button" 
            onClick={() => {
              if (window.confirm("Are you sure you want to restore all 15 curated properties to factory data?")) {
                resetProperties();
                alert("System restored! All 15 elite properties are back.");
              }
            }}
          >
            <i className="bi bi-arrow-counterclockwise"></i> Reset Factory Data
          </button>
        </div> {/*===== admin-header =====*/}

        <div className="admin-stats">
          <div className="admin-stat-card">
            <h3>{totalCount.toLocaleString('en-US')}</h3>
            <p>Total Estates</p>
          </div>
          <div className="admin-stat-card">
            <h3>{saleCount.toLocaleString('en-US')}</h3>
            <p>Available For Sale</p>
          </div>
          <div className="admin-stat-card">
            <h3>{rentCount.toLocaleString('en-US')}</h3>
            <p>Curated For Rent</p>
          </div>
        </div> {/*===== admin-stats =====*/}

        <div className="admin-grid">
          
          <div className="admin-form">
            <h2><i className="bi bi-plus-circle-fill admin-icon-emerald"></i> Inject New Masterpiece</h2>
            <form onSubmit={handleSubmit} className="admin-core-form">
              
              <div className="form-input-group">
                <label>Property Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g. Chelsea Royal Mansion" required />
              </div>

              <div className="form-input-group">
                <label>District Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g. Chelsea" required />
              </div>

              <div className="form-row-double-lux">
                <div className="form-input-group">
                  <label>Price Value (Numeric)</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="e.g. 1750000" required />
                </div>
                <div className="form-input-group">
                  <label>Listing Status</label>
                  <select name="type" value={formData.type} onChange={handleInputChange}>
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                    <option value="Mortgage">For Mortgage</option>
                  </select>
                </div>
              </div> {/*===== form-row-double-lux ======*/}

              <div className="form-row-triple-lux">
                <div className="form-input-group">
                  <label>Beds</label>
                  <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} min="1" />
                </div>
                <div className="form-input-group">
                  <label>Baths</label>
                  <input type="number" name="bathroom" value={formData.bathroom} onChange={handleInputChange} min="1" />
                </div>
                <div className="form-input-group">
                  <label>Floors</label>
                  <input type="number" name="floors" value={formData.floors} onChange={handleInputChange} min="1" />
                </div>
              </div> {/*===== form-row-triple-lux =====*/}

              <button type="submit" className="admin-submit-btn">
                Add Property <i className="bi bi-arrow-down-left-circle-fill ms-1"></i>
              </button>
            </form> {/*===== dmin-core-form =====*/}
          </div>

          <div className="admin-ledger-block">
            <h2><i className="bi bi-shield-lock-fill admin-icon-emerald"></i> Active Portfolio Registry</h2>
            <div className="ledger-table">
              <table className="ledger-core-table">
                <thead>
                  <tr>
                    <th>Asset Details</th>
                    <th>Location</th>
                    <th>Value</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id}>
                      <td className="ledger-title">{property.title}</td>
                      <td><span className="ledger-badge">{property.location}</span></td>
                      <td className="ledger-price">{property.salePrice || property.rentPrice || property.mortgagePrice}</td>
                      <td>
                        <button 
                          className="ledger-delete-action-btn"
                          type="button"
                          onClick={() => {
                            if(window.confirm(`Are you absolutely sure you want to delete "${property.title}"?`)) {
                              deleteProperty(property.id);
                            }
                          }}
                          title="Purge asset from system"
                        >
                          <i className="bi bi-trash3-fill"></i> Purge
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> {/*===== admin-ledger-block =====*/}

        </div> {/*===== admin-grid =====*/}

      </div> {/*===== admin-page-container =====*/}
    </main>
  );
}

export default Admin;
