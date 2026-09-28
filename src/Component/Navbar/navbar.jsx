import { useEffect, useRef, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { propertyContext } from "../../Pages/context/propertyContext";
import "../Navbar/navbar.css";

function Navbar() {

  /*========== Context ==========*/
  const { favorites, compareList, scrollToTop } = useContext(propertyContext);

  /*========== States ==========*/
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef(null);

  /*========== FormData ==========*/
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  /*========== HandleInput ==========*/
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /*========== HandleForm ==========*/
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let tempErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) { tempErrors.name = "Please enter your full name to proceed."; isValid = false; }
    if (!formData.email.trim()) { tempErrors.email = "A valid email address is required for tour confirmation."; isValid = false; }
    if (!formData.phone.trim()) { tempErrors.phone = "Please provide a contact number for our elite concierge."; isValid = false; }

    setErrors(tempErrors);
    if (!isValid) return;

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(() => {
      setModal(false);
      setFormData({ name: "", email: "", phone: "" });
    });
  };

  /*========== Scroll-For-Navbar ==========*/
  useEffect(() => {
    const checkScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  /*========== MenuToggle ==========*/
  useEffect(() => {
    const closeMenuOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (e.target.classList.contains('menu-toggle') || e.target.classList.contains('line-bar')) return;
        setMenu(false);
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", closeMenuOutside);
    return () => document.removeEventListener("mousedown", closeMenuOutside);
  }, []);


  return (
    <div>
      <header className={`header ${scroll ? "scrolled-active" : ""}`}>
        <div className="nav-container">

          <div className="logo-zone">
            <Link to="/" className="logo-link" onClick={scrollToTop}>
              <span className="logo-dot"></span>AuraHomes
            </Link>
          </div> {/*===== logo-zone =====*/}

          <nav className={`nav-links ${menu ? "menu-active" : ""}`} ref={menuRef}>
            <li>
              <NavLink to="/" className="spatial-link-item" onClick={() => { setMenu(false); scrollToTop() }}>
                <i className="bi bi-compass-fill"></i><span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Properties" className="spatial-link-item" onClick={() => { setMenu(false); scrollToTop() }}>
                <i className="bi bi-building-up"></i><span>Properties</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" className="spatial-link-item" onClick={() => { setMenu(false); scrollToTop() }}>
                <i className="bi bi-layers-half"></i><span>Services</span>
              </NavLink>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              onClick={(e) => {
                if (e.target.closest('.dropdown-toggle-txt')) {
                  setDropdown(!dropdown);
                }
              }}
            >
              <span className={`spatial-link-item dropdown-toggle-txt ${dropdown ? "dropdown-open" : ""}`}>
                <i className="bi bi-grid-1x2-fill"></i>
                <span>Features</span>
                <i className="bi bi-chevron-down arrow-indicator"></i>
              </span>

              {dropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/Favorites" className="dropdown-item-link" onClick={() => {
                      setMenu(false);
                      setDropdown(false);
                      scrollToTop()
                    }}>
                      <i className="bi bi-heart-fill fav-heart-icon"></i>
                      <span>Favorites</span>
                      {favorites && favorites.length > 0 && (
                        <span className="fav-badge-dropdown">{favorites.length}</span>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Compare" className="dropdown-item-link" onClick={() => {
                      setMenu(false);
                      setDropdown(false);
                      scrollToTop()
                    }}>
                      <i className="bi bi-arrow-left-right"></i>
                      <span>Compare</span>
                      {compareList && compareList.length > 0 && (
                        <span className="compare-badge-dropdown">{compareList.length}</span>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Admin" className="dropdown-item-link" onClick={() => {
                      setMenu(false);
                      setDropdown(false);
                      scrollToTop()
                    }}>
                      <i className="bi bi-person-workspace"></i>
                      <span>Admin</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/Testimonial" className="spatial-link-item" onClick={() => { setMenu(false); scrollToTop(); }}>
                <i className="bi bi-chat-square-quote-fill"></i><span>Testimonials</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/About" className="spatial-link-item" onClick={() => { setMenu(false); scrollToTop() }}>
                <i className="bi bi-shield-check"></i><span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="spatial-link-item" onClick={() => { setMenu(false); scrollToTop() }}>
                <i className="bi bi-chat-left-dots"></i><span>Contact</span>
              </NavLink>
            </li>

            <button className="mobile-action-btn" onClick={() => { setModal(true); setMenu(false); scrollToTop() }}>
              Request Visit
            </button>
          </nav> {/*===== nav-links =====*/}

          <div className="control-zone">
            <button className="desktop-action-btn" onClick={() => setModal(true)}>
              <i className="bi bi-calendar2-week"></i>
            </button>

            <div className={`menu-toggle ${menu ? "toggle-active" : ""}`} onClick={() => setMenu(!menu)}>
              <span className="line-bar bar-1"></span>
              <span className="line-bar bar-2"></span>
              <span className="line-bar bar-3"></span>
            </div>
          </div> {/*===== control-zone =====*/}

        </div> {/*===== nav-container =====*/}
      </header>

      {/* ModalSide */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-modal" onClick={() => setModal(false)}><i className="bi bi-x-lg"></i></button>
            <div className="modal-head">
              <h2 className="modal-title">Exclusive Tour</h2>
              <p className="modal-subtitle">Schedule an agent-guided walkthrough of our premium properties.</p>
            </div> {/*===== modal-head =====*/}
            <form className="form-core" onSubmit={handleFormSubmit}>
              <div className="input-field">
                <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && <span className="spatial-err">{errors.name}</span>}
              </div>
              <div className="input-field">
                <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleInputChange} />
                {errors.email && <span className="spatial-err">{errors.email}</span>}
              </div>
              <div className="input-field">
                <input type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} />
                {errors.phone && <span className="spatial-err">{errors.phone}</span>}
              </div>
              <button className="submit-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
