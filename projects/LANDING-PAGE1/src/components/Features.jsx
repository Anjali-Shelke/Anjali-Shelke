import { motion } from "framer-motion";
import "./Features.css";

const features = [
  {
    title: "Real-time Dashboard",
    desc: "Monitor your sales, transactions, and business performance with real-time updates.",
    icon: "dashboard",
    color: "purple",
  },
  {
    title: "Transaction History",
    desc: "Detailed records of all transactions with search, filter, and export capabilities.",
    icon: "transactions",
    color: "green",
  },
  {
    title: "Support Tickets",
    desc: "Raise and track support tickets directly from your dashboard.",
    icon: "support",
    color: "purple",
  },
  {
    title: "Profile Management",
    desc: "Complete control over your business profile and permissions.",
    icon: "profile",
    color: "green",
  },
  {
    title: "Device Management",
    desc: "View and manage all connected devices securely.",
    icon: "device",
    color: "purple",
  },
  {
    title: "Advanced Analytics",
    desc: "Analyze trends, insights, and business growth opportunities.",
    icon: "analytics",
    color: "green",
  },
];

/* CARD ANIMATION (SAME AS SERVICES) */
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

/* TEXT ANIMATION */
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <section className="features" id="features">
      {/* Pill */}
      <motion.span
        className="features-pill"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
      >
        FEATURES
      </motion.span>

      {/* Heading */}
      <motion.h2
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
      >
        Everything You Need to Grow Your Business
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="features-subtitle"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.35}
      >
        VGPAY provides a comprehensive suite of tools to streamline your payment
        processing and business operations.
      </motion.p>

      {/* Cards */}
      <div className="features-grid">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="feature-card"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {/* ICON */}
            <div className={`feature-icon ${item.color}`}>
              {item.icon === "dashboard" && "▦"}
              {item.icon === "transactions" && "₹"}
              {item.icon === "support" && "🎫"}
              {item.icon === "profile" && "👤"}
              {item.icon === "device" && "📱"}
              {item.icon === "analytics" && "📊"}
            </div>

            {/* TEXT INSIDE CARD */}
            <motion.h3
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
            >
              {item.title}
            </motion.h3>

            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.25}
            >
              {item.desc}
            </motion.p>

            <motion.span
              className="learn-more"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.35}
            >
              Learn more →
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
