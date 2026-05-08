import "../Contact/Contact.css"
import Footer from "../../Component/Footer/footer"
import { motion } from "framer-motion"
function Contact() {
    return (
        <div>
            <main>
                <section className="contact-section">
                    <div className="contact-content">
                        <div className="contact-title">
                            <h2 className="contact-text"> Contact Us </h2>
                            <span className="contact-line"></span>
                        </div>

                        <div className="contact-cards container-fluid">
                            <motion.div className="contact-card-info"
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}>
                                <i className="bi bi-geo-alt"></i>
                                <h4> Addres </h4>
                                <p> London, UK </p>
                                <p> Baker Street </p>
                            </motion.div>

                            <motion.div className="contact-card-info"
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}>
                                <i className="bi bi-telephone"></i>
                                <h4> Phone </h4>
                                <p> +44 0958 764 920 </p>
                                <p> Available Mon - Fri </p>
                                <p> 9:00 AM - 7:00 PM </p>
                            </motion.div>

                            <motion.div className="contact-card-info"
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}>
                                <i className="bi bi-envelope"></i>
                                <h4> Email </h4>
                                <p> hjaaaFaar646@gmail.com </p>
                            </motion.div>
                        </div>
                    </div>
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840366.9084753126!2d0.7730076606572761!3d51.658591119970566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2sro!4v1774556542920!5m2!1sar!2sro" allowFullScreen loading="lazy"></iframe>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Contact