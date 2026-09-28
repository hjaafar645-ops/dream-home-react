import { motion } from "framer-motion"
import "../Services/Services.css"

function Services() {

  /*========== Card-Motion ==========*/
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 65, damping: 16 }
    }
  };

  return (
    <section className="services-page">
      <div className="services-section">

        <div className="services-header">
          <span className="services-badge">Centralized Property Services</span>
          <h2 className="services-main-title">Our Capabilities</h2>
          <span className="services-title-line"></span>
        </div> {/*===== services-header =====*/}

        <div className="services-landscape">
          <motion.article
            className="landscape-service-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
          >
            <div className="landscape-img-side">
              <img src="/Images/img-service(1).jpg" alt="our-service/ex:pathroom" className="landscape-img" />
            </div>
            <div className="landscape-info-side">
              <div className="landscape-badge-num">01</div>
              <h3 className="landscape-card-title">Bespoke Financial & Mortgage Strategies</h3>
              <p className="landscape-card-subtitle">
                Secure specialized and confidential financial solutions.
                Our elite asset experts optimize luxury mortgage planning efficiently,
                safely, and transparently to build the foundation of your investment.
              </p>
            </div>
          </motion.article> {/*===== landscape-service-item =====*/}

          <motion.article
            className="landscape-service-item item-inverse-lux"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
          >
            <div className="landscape-img-side">
              <img src="/Images/img-service(2).png" alt="our-service/ex:mini-home" className="landscape-img" />
            </div>
            <div className="landscape-info-side">
              <div className="landscape-badge-num">02</div>
              <h3 className="landscape-card-title">Curated Portfolio Acquisition & Rental</h3>
              <p className="landscape-card-subtitle">
                Unveiling an exclusive selection of architectural masterpieces for sale or rent across Mayfair,
                Knightsbridge, and Chelsea. We match your ultra-high-net-worth lifestyle with peerless property curation.
              </p>
            </div>
          </motion.article> {/*===== landscape-service-item =====*/}

          <motion.article
            className="landscape-service-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
          >
            <div className="landscape-img-side">
              <img src="/Images/img-service(3).jpg" alt="our-service/ex:our-plans" className="landscape-img" />
            </div>
            <div className="landscape-info-side">
              <div className="landscape-badge-num">03</div>
              <h3 className="landscape-card-title">Rigorous Property Architecture Metrics</h3>
              <p className="landscape-card-subtitle">
                Gain absolute, uncompromising clarity on custom interior layouts, premium material tracking,
                and architectural specifications. We deliver detailed unit mapping so you make highly informed decisions.
              </p>
            </div>
          </motion.article> {/*===== landscape-service-item =====*/}

        </div> {/*===== services-landscape =====*/}

      </div> {/*===== services-section =====*/}
    </section>
  )
}

export default Services;
