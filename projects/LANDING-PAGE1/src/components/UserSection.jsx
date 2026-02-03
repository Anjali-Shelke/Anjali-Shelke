import "./UserSection.css";
import "./UserSection.css";

import { FiUsers } from "react-icons/fi";
import { BsBriefcase, BsBuildings } from "react-icons/bs";


export default function UsersSection() {
  return (
    <section className="users-section">
      {/* Heading */}
      <div className="users-heading">
        <h1>
          Who Uses <span>VG Pay?</span>
        </h1>
        <p>
          Designed for every stakeholder in the hospitality and retail ecosystem
        </p>
      </div>

      {/* Cards */}
      <div className="users-cards">
        {/* Guests */}
        <div className="user-card">
            <div className="user-icon icon blue">
            <FiUsers size={22} color="#fff" />
            </div>

          {/* <div className="user-icon">👥</div> */}

          <h2>Guests</h2>
          <p className="user-desc">
            Seamless check in and checkout
            <br />
            experience
          </p>

          <ul>
            <li>Digital check-in</li>
            <li>Quick Payments</li>
            <li>Instant receipts</li>
            <li>Feedback system</li>
          </ul>
        </div>

        {/* Merchants */}
        <div className="user-card">
          {/* <div className="user-icon">🏪</div> */}

          <div className="user-icon icon green">
  <BsBriefcase size={22} color="#fff" />
</div>


          <h2>Merchants</h2>
          <p className="user-desc">
            Simplified billing and management
          </p>

          <ul>
            <li>Easy onboarding</li>
            <li>Real-time analytics</li>
            <li>Inventory tracking</li>
            <li>Staff management</li>
          </ul>
        </div>

        {/* Enterprises */}
        <div className="user-card">
          {/* <div className="user-icon">🏢</div> */}

          <div className="user-icon icon purple">
          <BsBuildings size={22} color="#fff" />
          </div>


          <h2>Enterprises</h2>
          <p className="user-desc">
            Scalable multi-location operations
          </p>

          <ul>
            <li>Centralized control</li>
            <li>Multi-outlet support</li>
            <li>Custom integrations</li>
            <li>Enterprise SLAs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
