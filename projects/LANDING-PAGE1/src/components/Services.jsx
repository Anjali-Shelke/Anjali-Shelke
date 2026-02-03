import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Smart Soundbox",
    desc: "Get instant voice alerts for every successful payment. No missed transactions. No confusion.",
    img: "/devices/device1.png",
  },
  {
    title: "Easy Payments",
    desc: "Accept payments from any UPI app with a simple QR scan.",
    img: "/devices/easypayment.png",
  },
  {
    title: "VG PAY",
    desc: "Manage your business with ease using a single powerful platform.",
    img: "/devices/vg-pay.png",
  },
  {
    title: "Advanced Analytics",
    desc: "Track performance and grow your sales with detailed insights.",
    img: "/devices/analytics.png",
  },
  {
    title: "Secure & Compliant Payments",
    desc: "Payments secured by advanced encryption for complete peace of mind.",
    img: "/devices/security.png",
  },
];

/* CARD ANIMATION */
const cardAnimation = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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
const textAnimation = {
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

const Services = () => {
  return (
    <section className="services">
      {/* Pill */}
      <motion.span
        className="services-pill"
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
      >
        OUR SERVICES
      </motion.span>

      {/* Heading */}
      <motion.h2
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
      >
        Everything You Need to Accept Payments Smarter
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="services-subtitle"
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.35}
      >
        VG Pay offers secure, fast, and reliable payment solutions with instant
        sound alerts and real-time business tracking for merchants.
      </motion.p>

      {/* Cards */}
      <div className="services-grid">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="service-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="service-icon">
              <img src={item.img} alt={item.title} />
            </div>

            {/* Card Text Animation */}
            <motion.h3
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
            >
              {item.title}
            </motion.h3>

            <motion.p
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.25}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
