import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Users, DollarSign, Globe } from "lucide-react";
import "../components/Home.css";
import Features from "../components/Features";
import Services from "../components/Services";
import DevicesSection from "../components/DevicesSection";
import UserSection from "../components/UserSection";
import Security from "../components/Security";
import DownloadFooter from "../components/DownloadFooter";

const devices = [
  "/devices/device1.png",
  "/devices/device2.png",
  "/devices/device3.png",
  "/devices/device4.png",
];

const clients = [
  "/devices/drdo.png",
  "/devices/Govt-of-Haryana-Commons.avif",
  "/devices/India Government-01.jpg",
  "/devices/aquigen_logo.jpg",
  "/devices/icici.jpg",
  "/devices/lokmangal1.jpg",
];

const stats = [
  { title: "10K+", text: "Active Merchants", icon: <Users size={22} />, bg: "#EEF2FF", color: "#6366F1" },
  { title: "$1B+", text: "Processed Monthly", icon: <DollarSign size={22} />, bg: "#ECFDF3", color: "#22C55E" },
  { title: "150+", text: "Countries Supported", icon: <Globe size={22} />, bg: "#FFF7ED", color: "#F59E0B" },
];

const Home = () => {
  const [active, setActive] = useState("home");
  const [currentDevice, setCurrentDevice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  /* ================= HERO IMAGE SLIDER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ================= SCROLL SPY (ONLY NEW LOGIC) ================= */
  useEffect(() => {
    const sectionIds = [
      "home",
      "features",
      "DevicesSection",
      "services",
      "users",
      "security",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setActive(id);
      }, 300);
      return;
    }
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const goToPage = (path) => {
    setActive("");
    navigate(path);
  };

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar"
      >
        <div className="nav-container">
          <div className="logo" onClick={() => goToPage("/")}>
            <img src="/devices/app-logo 1.png" alt="VG PAY Logo" />
          </div>
          <ul>
            <li className={active === "home" ? "active" : ""} onClick={() => scrollTo("home")}>Home</li>
            <li className={active === "features" ? "active" : ""} onClick={() => scrollTo("features")}>Features</li>
            <li className={active === "DevicesSection" ? "active" : ""} onClick={() => scrollTo("DevicesSection")}>Our Devices</li>
            <li className={location.pathname === "/about" ? "active" : ""} onClick={() => goToPage("/about")}>About Us</li>
            <li className={location.pathname === "/contact" ? "active" : ""} onClick={() => goToPage("/contact")}>Contact Us</li>
          </ul>
        </div>
      </motion.nav>

      {/* ================= HERO (UNCHANGED) ================= */}
      <section className="hero" id="home">
        <div className="hero-text">
          <motion.h1
            style={{ display: "inline-block", overflow: "hidden" }}
            initial="hidden"
            animate="visible"
          >
            {"Power Your Business with VGPAY".split(" ").map((word, wi) => (
              <motion.span
                key={wi}
                style={{ display: "inline-block", marginRight: "6px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={li}
                    variants={{
                      hidden: { opacity: 0, y: 50, rotate: (Math.random() - 0.5) * 20 },
                      visible: {
                        opacity: 1,
                        y: [0, -4, 2, 0],
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 120,
                          damping: 18,
                          duration: 1.2,
                        },
                      },
                    }}
                    style={{ display: "inline-block", color: word === "VGPAY" ? "#4caf50" : undefined }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            The most advanced payment platform designed to accelerate your business growth and streamline operations.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button className="primary" whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Start Free Trial
            </motion.button>
            <motion.button className="secondary" whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              ▶ Watch Demo
            </motion.button>
          </motion.div>
        </div>

        <div className="hero-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentDevice}
              src={devices[currentDevice]}
              alt={`VG Pay Device ${currentDevice + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              exit={{ opacity: 0, scale: 0.9 }}
            />
          </AnimatePresence>
        </div>

        <motion.div
          className="hero-trust"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="avatar-group">
            <img src="/devices/drdo.png" alt="User 1" />
            <img src="/devices/Govt-of-Haryana-Commons.avif" alt="User 2" />
            <img src="/devices/India Government-01.jpg" alt="User 3" />
          </div>
          <p>Trusted by <strong>10,000+</strong> merchants worldwide</p>
        </motion.div>
      </section>

      {/* ================= TRUSTED CLIENTS ================= */}
      <section className="trusted-clients">
        <h2>Our Trusted Clients</h2>
        <div className="logo-marquee">
          <div className="logo-track">
            {clients.map((logo, i) => (
              <div className="logo-card" key={i}>
                <img src={logo} alt="Client" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <motion.div className="stats-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Powering Businesses at Scale</h2>
          <p>Trusted by merchants worldwide to process payments securely</p>
        </motion.div>

        <div className="stats">
          {stats.map((item, i) => (
            <motion.div key={i} className="stat-card" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, delay: i * 0.2 }}>
              <div className="stat-icon" style={{ background: item.bg, color: item.color }}>{item.icon}</div>
              <div className="stat-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTENT SECTIONS (ONLY WRAPPED) ================= */}
      <section id="DevicesSection"><DevicesSection /></section>
      <section id="features"><Features /></section>
      <section id="services"><Services /></section>
      <section id="users"><UserSection /></section>
      <section id="security"><Security /></section>
      <DownloadFooter />

    </div>
  );
};

export default Home;
