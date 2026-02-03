import "./Security.css";
import SecurityCard from "./SecurityCard";
import { motion } from "framer-motion";
import {
  MdLock,
  MdPerson,
  MdMonitorHeart,
  MdPhonelinkLock
} from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Security = () => {
  return (
    <motion.section
      className="security-wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* TAG */}
      <motion.div className="security-tag" variants={fadeUp}>
        SECURITY PROTOCOLS
      </motion.div>

      {/* HEADING */}
      <motion.h1 className="security-heading" variants={fadeUp}>
        Build for Security. <span>Designed for Trust</span>
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p className="security-subtitle" variants={fadeUp}>
        Enterprise-grade security protocols protecting every transaction
      </motion.p>

      {/* CARDS */}
      <motion.div className="security-grid" variants={containerVariants}>
        <SecurityCard
          icon={<MdLock />}
          title="End-To-End Encryption"
          desc="All data transmitted through VG pay is protected with military-grade AES 256-bit encryption"
        />

        <SecurityCard
          icon={<MdPerson />}
          title="Role-Based Access Control"
          desc="Granular permissions system ensuring staff only access features relevant to their role"
        />

        <SecurityCard
          icon={<MdMonitorHeart />}
          title="Real-Time Threat Monitoring"
          desc="24/7 automated monitoring detects and prevents suspicious activities instantly"
        />

        <SecurityCard
          icon={<MdPhonelinkLock />}
          title="Device-Level Lockdown"
          desc="Remote device management with instant lockdown capabilities for lost or stolen devices"
        />
      </motion.div>
    </motion.section>
  );
};

export default Security;
