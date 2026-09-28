import { motion } from "framer-motion"
import "../About/About.css"

function About() {

  /*========== Motion-Variants ==========*/
  const fv = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 65, damping: 16 }
    }
  };

  return (
    <section className="about-compone">
      <div className="about-section">

        <div className="about-visuals-side">
          <motion.div
            className="about-main-frame"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fv}
          >
            <img src="/Images/mansion.jpg" alt="AuraHomes Elite Estate" className="img-back" />

            <div className="mini-img">
              <img src="/Images/givinKey.jpg" alt="Keys Handover" className="img-front" />
            </div>
          </motion.div>
        </div> {/*===== about-visuals-side =====*/}

        <div className="about-text-side">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fv} className="about-header">
            <span className="about-badge">The House of Aura</span>
            <h2 className="about-title">Crafting Peerless Living Experiences</h2>
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fv} className="about-description">
            We are an elite real estate boutique dedicated to elevating architectural benchmarks and helping visionaries acquire their peerless residences across London. Our specialized concierge team delivers verified high-end listings, comprehensive asset tracking, and uncompromised professional guidance to render your property journey effortlessly refined.
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fv} className="about-stats">
            <div className="stat-box">
              <h3>£1.4B+</h3>
              <p>Assets Managed</p>
            </div>
            <div className="stat-box">
              <h3>98.4%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-box">
              <h3>15+ Years</h3>
              <p>Elite Concierge</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fv} className="about-trust-badges">
            <span className="badge-item-lux"> <i className="bi bi-patch-check-fill"></i> Elite Curated Portfolios </span>
            <span className="badge-item-lux"> <i className="bi bi-patch-check-fill"></i> Optimal Investment Value </span>
            <span className="badge-item-lux"> <i className="bi bi-patch-check-fill"></i> Centralized Concierge Search </span>
            <span className="badge-item-lux"> <i className="bi bi-patch-check-fill"></i> 24/7 Dedicated Management </span>
          </motion.div>

        </div> {/*===== about-text-side =====*/}

      </div> {/*===== about-section =====*/}
    </section>
  )
}

export default About;
