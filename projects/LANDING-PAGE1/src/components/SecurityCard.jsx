import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const SecurityCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      className="security-card"
      variants={cardVariant}
      whileHover={{
        y: -10,
        boxShadow: "0px 15px 30px rgba(48, 182, 84, 0.4)"
      }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="security-icon"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {icon}
      </motion.div>

      <div className="security-text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default SecurityCard;
