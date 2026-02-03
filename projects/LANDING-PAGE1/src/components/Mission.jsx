import "./Mission.css";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaAward } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="mission" id="mission-section">
      <div className="container">

        <span className="badge center">Our Mission</span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Empowering Innovation Through Technology and Trust
        </motion.h2>

        <p className="mission-text">
          We are dedicated to delivering cutting-edge technology solutions that
          drive business growth and digital transformation.
        </p>

        <div className="mission-grid">
          {[
            {
              icon: <FaLightbulb />,
              title: "Innovation-Driven",
              desc: "Constantly exploring new technologies and methodologies"
            },
            {
              icon: <FaUsers />,
              title: "Client-Centric",
              desc: "Your success is our success, and we're committed to it"
            },
            {
              icon: <FaAward />,
              title: "Quality Excellence",
              desc: "Delivering solutions that exceed expectations"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mission-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;
