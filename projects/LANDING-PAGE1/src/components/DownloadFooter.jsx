import "./DownloadFooter.css";
import {
  FaApple,
  FaGooglePlay,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import vgPayLogo from "../assets/app-logo 1.png";

export default function DownloadFooter() {
  return (
    <>
      {/* DOWNLOAD BOX */}
      <section className="download-wrapper">
        <div className="download-box">
          <h2 className="download-title">Download VGPAY Today</h2>

          <p className="download-subtitle">
            Get started in minutes. Download the VGPAY app and start managing
            your payment business from anywhere.
          </p>

          <div className="store-buttons">
            {/* APP STORE (no link yet) */}
            <div className="store-btn apple">
              <FaApple className="store-icon" />
              <span>App Store</span>
            </div>

            {/* ✅ GOOGLE PLAY — LINK ADDED */}
            <a
              href="https://play.google.com/store/apps/details?id=com.vgpay.agent"
              target="_blank"
              rel="noopener noreferrer"
              className="store-link"
            >
              <div className="store-btn google">
                <FaGooglePlay className="store-icon" />
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          {/* LEFT */}
          <div className="footer-brand">
            <img
              src={vgPayLogo}
              alt="VG Pay Logo"
              className="footer-logo"
            />

            <p className="footer-description">
              <span>Next-generation POS technology designed for hospitality</span>
              <span> retail, and enterprise environments</span>
              <span className="footer-tagline">
                Secure. Scalable. Seamless.
              </span>
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            <div>
              <h4>PRODUCT</h4>
              <ul>
                <li>Features</li>
                <li>Services</li>
                <li>Security</li>
              </ul>
            </div>

            <div>
              <h4>COMPANY</h4>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Security</li>
              </ul>
            </div>

            <div>
              <h4>LEGAL</h4>
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>© 2026 VishwaGuru Infotech. All rights reserved.</span>

          <div className="socials">
            <span className="social">Twitter</span>
            <span className="social">LinkedIn</span>
            <span className="social">Github</span>
          </div>
        </div>
      </footer>
    </>
  );
}
