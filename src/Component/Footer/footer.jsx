import { Link } from "react-router-dom";
import { propertyContext } from "../../Pages/context/propertyContext";
import { useContext } from "react";
import "../Footer/footer.css";

function Footer() {

  /*========== Context ==========*/
  const { scrollToTop } = useContext(propertyContext)

  return (

    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-top-brand">

          <div className="brand-block">
            <h2 className="footer-brand-logo-txt">AuraHomes</h2>
            <p className="footer-brand-tagline">Architectural Masterpieces & Elite London Concierge</p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-links-list">
              <li> <Link to="/" onClick={scrollToTop}>Home</Link> </li>
              <li> <Link to="/Properties" onClick={scrollToTop}>Properties</Link> </li>
              <li> <Link to="/Services" onClick={scrollToTop}>Services</Link> </li>
              <li> <Link to="/About" onClick={scrollToTop}>About</Link> </li>
              <li> <Link to="/Testimonial" onClick={scrollToTop}>Testimonial</Link> </li>
              <li> <Link to="/Contact" onClick={scrollToTop}>Contact</Link> </li>
            </ul>
          </nav> {/*===== footer-nav =====*/}

        </div> {/*===== footer-top-brand =====*/}

        <span className="footer-line"></span>

        <div className="footer-achievements">

          <div className="footer-badges">
            <div className="achievement-badge">
              <i className="bi bi-patch-check-fill"></i>
              <span>10+ Years Excellence</span>
            </div>
            <div className="achievement-badge">
              <i className="bi bi-patch-check-fill"></i>
              <span>600+ VIP Clients</span>
            </div>
            <div className="achievement-badge">
              <i className="bi bi-patch-check-fill"></i>
              <span>Best Agency 2026</span>
            </div>
          </div> {/*===== footer-badges =====*/}

          <div className="footer-social">
            <a href="#" aria-label="Facebook"> <i className="bi bi-facebook"></i> </a>
            <a href="#" aria-label="WhatsApp"> <i className="bi bi-whatsapp"></i> </a>
            <a href="#" aria-label="Twitter"> <i className="bi bi-twitter-x"></i> </a>
          </div>

        </div> {/*===== footer-achievements =====*/}

        <span className="footer-line"></span>

        <div className="footer-bottom">
          <p className="legal-text">
            &copy; 2026 Luxury <span className="brand-glow">AuraHomes</span>. All rights reserved.
          </p>
          <p className="designer">
            Centralized Architectural Experience Designed by <span className="designer-name">Jafar</span>
          </p>
        </div> {/*===== footer-bottom =====*/}

      </div> {/*===== footer-container =====*/}
    </footer>
  )
}

export default Footer;
