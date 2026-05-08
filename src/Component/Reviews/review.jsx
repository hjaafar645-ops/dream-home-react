import { motion } from "framer-motion"
import "../Reviews/review.css"
function Review() {
  return (
    <div>
      <section className="testimonial-section">
        <div className="testi-title">
          <h2 className="testi-text"> What Our Clients Say </h2>
          <span className="testi-line"></span>
        </div>
        <div className="testimonial-content">
          <motion.div className="review-card"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            <h3 className="review-name"> Michael Thompson <i class="bi bi-patch-check-fill" style={{ color: "#0091ff" }}></i> </h3>
            <p className="review-text"> I had an amazing experience! finding my dream home with this company .
              The team was professional and guided me every step of the way .
            </p>
            <div className="review-icons">
              <i className="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <img className="review-img" src="/Images/client2.jpg" alt="client-2" />
          </motion.div>

          <motion.div className="review-card"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 className="review-name"> Sarah Williams <i class="bi bi-patch-check-fill" style={{ color: "#0091ff" }}></i> </h3>
            <p className="review-text"> The team was incredibly helpful throughout the entire process. They made
              everything simple <br></br>, clear, and stress-free. I highly recommend their service.
            </p>
            <div className="review-icons">
              <i className="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <img className="review-img" src="/Images/client3.jpg" alt="client-3" />
          </motion.div>

          <motion.div className="review-card"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <h3 className="review-name"> Daniel Carter <i class="bi bi-patch-check-fill" style={{ color: "#0091ff" }}></i> </h3>
            <p className="review-text"> Professional, reliable, and very responsive. They understood exactly what
              i was looking for and helped me find the perfect property.
            </p>
            <div className="review-icons">
              <i className="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <img className="review-img" src="/Images/client1.jpg" alt="client-1" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Review