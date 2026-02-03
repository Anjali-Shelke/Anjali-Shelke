import "./Specialization.css";
import { motion } from "framer-motion";
import { FaCogs, FaCloud, FaChartLine } from "react-icons/fa";

const Specialization = () => {
  return (
    <section className="specialization" id="specialization">
      <div className="container">
        <span className="badge center">What We Do</span>
        <h2>Specialization Areas</h2>
        <p className="subtitle">
          We excel in delivering comprehensive technology solutions
        </p>

        <motion.div
          className="spec-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            {
              icon: <FaCogs />,
              title: "Product Development",
              desc: "Scalable and robust custom software solutions."
            },
            {
              icon: <FaCloud />,
              title: "Cloud Solutions",
              desc: "AWS & Azure cloud infrastructure services."
            },
            {
              icon: <FaChartLine />,
              title: "Data Analytics",
              desc: "Transform data into actionable insights."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="spec-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
            >
              <div className="spec-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specialization;
