import "../Services/Services.css"
import { motion } from "framer-motion"
function Services() {
    return (
        <div>
            <main>
                <section className="services-section">
                    <div className="services-title">
                        <h2 className="services-title"> Our Services </h2>
                        <span className="services-line"></span>
                    </div>
                    <div className="container">
                        <div className="services-cards">
                            <motion.div className="card-services-content"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <i className="fa fa-home"></i>
                                <h3> Buying Property </h3>
                                <p> We help you find the perfect property to buy, whether it's a house, apartment
                                    , or commercial space. Our team of experts will guide you through the entire buying process
                                    , ensuring a smooth and successful transaction.
                                </p>
                            </motion.div>

                            <motion.div className="card-services-content"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <i className="fa fa-building"></i>
                                <h3> Renting Property  </h3>
                                <p> Discover the perfect rental that fits your needs and budget.
                                    Our team of experts will help you find the ideal property to call home.
                                </p>
                            </motion.div>

                            <motion.div className="card-services-content"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <i className="fa fa-money"></i>
                                <h3> Mortgage Property </h3>
                                <p> Secure financial solutions for your property needs. Our experts help you manage mortgage efficiently and safely .
                                </p>
                            </motion.div>

                            <motion.div className="card-services-content"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <i className="fa fa-wrench"></i>
                                <h3> Property Details & Features </h3>
                                <p> Get complete information about each property :
                                    number of bedrooms, bathrooms, pricing,
                                    and all essential details to make informed decisions about your real estate investments.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Services