import { Link } from "react-router-dom"
import "../Footer/footer.css"
function footer() {
    return (
        <div>
            <footer className="footer-section">
                <div className="footer-content">
                    <div className="foot-left">
                        <img src="/Images/logo.png" alt="logo2" className="foot-img" />
                        <p> Helping you find the perfect place to call home in London . </p>
                        <div className="left-icon">
                            <a href="#">  <i className="bi bi-facebook" style={{ color: "#1877f2" }}></i> </a>
                            <a href="#">  <i className="bi bi-whatsapp" style={{ color: "#25d366" }}></i> </a>
                            <a href="#">  <i className="bi bi-twitter-x" style={{ color: "#ffffff" }}></i> </a>
                        </div>
                    </div>

                    <div className="foot-centre">
                        <h3> Quick Links </h3>
                        <ul>
                            <li> <Link to="/"> Home </Link> </li>
                            <li> <Link to="/Properties"> Properties </Link> </li>
                            <li> <Link to="/Services"> Services </Link> </li>
                            <li> <Link to="/About"> About </Link> </li>
                            <li> <Link to="/Testimonial"> Testimonial </Link> </li>
                            <li> <Link to="/Contact"> Contact </Link> </li>
                        </ul>
                    </div>

                    <div className="foot-right">
                        <h3> Achievements </h3>
                        <ul>
                            <li> <i className="bi bi-quote"></i> 10+ Years of Excellence in Real Estate . </li>
                            <li> <i className="bi bi-quote"></i> 600+ Happy Clients Served . </li>
                            <li> <i className="bi bi-quote"></i> Awarded Best Real Estate Agency 2026 . </li>
                        </ul>
                    </div>
                </div>
                <span className="line-fin"></span>
                <p className="foot-bottom">
                    &copy; 2026 Luxury <span style={{ color: "rgb(255, 191, 0)" }}>Golden</span>Key. All rights reserved. | Designed by Jaafar
                </p>
            </footer>
        </div>
    )
}

export default footer