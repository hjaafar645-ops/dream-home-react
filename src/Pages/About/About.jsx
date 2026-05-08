import "../About/About.css"
import { motion } from "framer-motion"
function About() {

  const lines = [
    "we are a modern real estate company dedicated to helping people",
    "find their perfect homes .Our team provides trusted listings, detailed",
    "property insights, and professional guidance to make your home",
    "search simple and strees-free ."
  ]

  return (
    <div>
      <main>
        <section className="about-section">
          <div className="about-content">
            <motion.div className="about-img"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}>
              <img src="/Images/givinKey.jpg" alt="house-keys-handover" />
            </motion.div>
            <div className="about-text">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                About Us
              </motion.h2>
              {lines.map((line, index) => {
                return (
                  <motion.p key={index}
                    initial={{ opacity: 0, y: 120 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.4 }}
                  >
                    {line}
                  </motion.p>
                )
              }
              )}
              <motion.div className="features-list"
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                <span> <i class="bi bi-check-circle"></i> Trusted Properties </span>
                <span> <i class="bi bi-check-circle"></i> Best Market Prices </span>
                <span> <i class="bi bi-check-circle"></i> Easy Search & Filtering </span>
                <span> <i class="bi bi-check-circle"></i> Customer Support 24/7 </span>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About