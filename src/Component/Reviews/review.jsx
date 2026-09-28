import { motion } from "framer-motion"
import "../Reviews/review.css"

function Review() {

  /*========== Motion-Variants ==========*/
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 75, damping: 16 }
    }
  };

  return (
    <motion.section
      className="spatial-testimonial"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="testimonial-section-container">

        <div className="testi-showcase-panel">
          <div className="testi-box">
            <span className="testi-badge">Verified Social Proof</span>
            <h2 className="testi-title">What Our Elite Clients Say</h2>
            <span className="testi-title-line"></span>

            <p className="testi-showcase-description">
              Uncompromising loyalty from London's most discerning property investors and premium homeowners.
            </p>

            <div className="testi-rating-giant-box">
              <div className="giant-rating-num">4.9</div>
              <div className="giant-rating-meta">
                <div className="giant-stars-row">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>Audited Platform Satisfaction <i className="bi bi-patch-check-fill review-badge-emerald"></i></p>
              </div>
            </div>
          </div> {/*===== testi-rating-giant-box =====*/}
        </div> {/*===== testi-box =====*/}

        <div className="testimonial-timeline">
          <motion.article className="review-card" variants={cardVariants}>
            <div className="review-profile-footer">
              <img className="review-img" src="/Images/client2.jpg" alt="Michael Thompson" />
              <div className="avatar-meta-txt">
                <h3>Michael Thompson</h3>
                <p>Premium Homeowner <i className="bi bi-patch-check-fill review-badge-emerald"></i></p>
              </div>
            </div>
            <div className="review-card-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="review-card-text">
              "An unparalleled acquisition experience. The concierge tailored our Chelsea villa integration
              with strict fiduciary precision, rendering the entire bespoke transaction beautifully transparent and secure."
            </p>
          </motion.article> {/*===== review-card =====*/}

          <motion.article className="review-card" variants={cardVariants}>
            <div className="review-profile-footer">
              <img className="review-img" src="/Images/client3.jpg" alt="Sarah Williams" />
              <div className="avatar-meta-txt">
                <h3>Sarah Williams</h3>
                <p>Corporate Client <i className="bi bi-patch-check-fill review-badge-emerald"></i></p>
              </div>
            </div>
            <div className="review-card-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="review-card-text">
              "Managing multi-million dollar corporate assets requires absolute operational excellence.
              AuraHomes consistently delivers high-fidelity residential auditing, immaculate corporate rentals, and zero stress."
            </p>
          </motion.article> {/*===== review-card =====*/}

          <motion.article className="review-card" variants={cardVariants}>
            <div className="review-profile-footer">
              <img className="review-img" src="/Images/client1.jpg" alt="Daniel Carter" />
              <div className="avatar-meta-txt">
                <h3>Daniel Carter</h3>
                <p>Mayfair Investor <i className="bi bi-patch-check-fill review-badge-emerald"></i></p>
              </div>
            </div>
            <div className="review-card-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <p className="review-card-text">
              "Uncompromisingly professional, reliable,
              and exceptionally responsive. They instantly grasped the exact architectural nuances
              I was seeking and confidently captured the perfect off-market Mayfair estate."
            </p>
          </motion.article> {/*===== review-card =====*/}

        </div> {/*===== testi-showcase-panel =====*/}
      </div> {/*===== testimonial-section-container =====*/}
    </motion.section>
  )
}

export default Review;
