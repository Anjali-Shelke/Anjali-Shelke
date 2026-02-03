import "./HeroMission.css";
import { motion } from "framer-motion";
import vgPayLogo from "../assets/image.png";

const floatingImage = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroMission = () => {
  return (
    <section className="about-hero" id="mission">
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="company-title">VishwaGuru Infotech</h2>

            <h1>
              Transforming Ideas Into <br />
              <span className="highlight">Digital Reality</span>
            </h1>

            <p className="hero-description">
              At VishwaGuru Infotech, we believe technology is the bridge between
              vision and achievement. Since our inception, we've been committed
              to delivering innovative solutions.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-image"
            variants={floatingImage}
            animate="animate"
            initial={{ opacity: 1 }}
          >
            <img
              src={vgPayLogo}
              alt="VishwaGuru Infotech Illustration"
            />
            <span className="image-glow" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroMission;
