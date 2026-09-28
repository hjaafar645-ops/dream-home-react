import { motion } from "framer-motion"
import "../Contact/Contact.css"

function Contact() {

    /*========== Motion-Variants ==========*/
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 65, damping: 16 }
        }
    };

    return (
        <section className="contact-page">
            <div className="contact-section">

                <div className="contact-header">
                    <span className="contact-badge">Global Concierge Gate</span>
                    <h1 className="contact-title">Connect With AuraHomes</h1>
                    <span className="contact-title-line"></span>
                </div>

                <div className="contact-grid">

                    <address className="contact-info-side">
                        <motion.div className="contact-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={cardVariants}
                        >
                            <div className="contact-icon-box">
                                <i className="bi bi-geo-alt-fill"></i>
                            </div>
                            <div className="contact-txt-block">
                                <h3>Our Headquarters</h3>
                                <p>Baker Street, Maryfair, London, UK</p>
                                <span className="contact-label">Central London Office</span>
                            </div>
                        </motion.div>

                        <motion.div className="contact-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={cardVariants}
                        >
                            <div className="contact-icon-box">
                                <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className="contact-txt-block">
                                <h3>Private Showing Hotline</h3>
                                <p>+44 0958 764 920</p>
                                <span className="contact-label">Mon - Fri • 9:00 AM - 7:00 PM (GMT)</span>
                            </div>
                        </motion.div>

                        <motion.div className="contact-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={cardVariants}
                        >
                            <div className="contact-icon-box">
                                <i className="bi bi-envelope-open-fill"></i>
                            </div>
                            <div className="contact-txt-block">
                                <h3>Client Correspondence</h3>
                                <p>hjafaar646@gmail.com</p>
                                <span className="contact-label">24/7 Dedicated Concierge Response</span>
                            </div>
                        </motion.div>
                    </address> {/*===== contact-info-side =====*/}

                    <motion.div
                        className="contact-map-side"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={cardVariants}
                    >
                        <div className="map-frame-wrapper">
                            <iframe
                                className="contact-map-core"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840366.9084753126!2d0.
                                7730076606572761!3d51.658591119970566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                                1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!
                                2sro!4v1774556542920!5m2!1sar!2sro"
                                allowFullScreen
                                loading="lazy"
                                title="AuraHomes Corporate Headquarters Map"
                            ></iframe>

                        </div> {/*===== map-frame-wrapper =====*/}
                    </motion.div> {/*===== contact-map-side =====*/}

                </div> {/*===== contact-grid =====*/}

            </div>
        </section>
    )
}

export default Contact;
