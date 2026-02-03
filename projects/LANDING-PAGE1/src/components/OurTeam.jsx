import "./OurTeam.css";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

/* ✅ IMPORT IMAGES PROPERLY */
import member1 from "../assets/member1 (2).png";
import member2 from "../assets/member2 (2).png";
import member3 from "../assets/member3 (2).png";
import member4 from "../assets/member4 (2).png";

const team = [
  {
    name: "Mr. Rajendra Gangarde",
    role: "Founder & CEO",
    desc:
      "Technically sophisticated and astute professional with hands-on, results-oriented 27+ years of demonstrated experience.",
    img: member1,
  },
  {
    name: "Mr. Vikas Modha",
    role: "CTO",
    desc:
      "Technically sophisticated and astute professional with hands-on, results-oriented 23+ years of experience in banking.",
    img: member2,
  },
  {
    name: "Mr. Ravindra Kulkarni",
    role: "Director",
    desc:
      "Experienced leader with strong expertise in business operations and strategic execution.",
    img: member3,
  },
  {
    name: "Mr. Deepak Desai",
    role: "Advisor",
    desc:
      "Seasoned professional with deep domain knowledge and advisory experience.",
    img: member4,
  },
];

const OurTeam = () => {
  return (
    <section className="team">
      <div className="container">
        <FaUsers className="team-main-icon" />
        <h2>Meet Our Team</h2>
        <p className="subtitle">The People Behind VishwaGuru’s Vision</p>

        <motion.div
          className="team-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {team.map((member, i) => (
            <motion.div
              className="team-card"
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
            >
              <img src={member.img} alt={member.name} />

              <h4 className="team-name">{member.name}</h4>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
