import { useState } from "react";
import "./ContactPg.css";
import { sendContactEmail } from "../utils/emailjs";

export default function Contact() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContactEmail(form);
    setForm({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contactpg-wrapper">
      <div className="contactpg-left">
        <h2>Get In Touch</h2>
        <p className="contactpg-subtitle">We're here to help and answer any question you might have.</p>

        <div className="contactpg-info-card">
          <span className="icon">✉</span>
          <div><h4>Email Us</h4><p>vishwaguruinfotech16@gmail.com</p></div>
        </div>

        <div className="contactpg-info-card">
          <span className="icon">📞</span>
          <div><h4>Call Us</h4><p>+91 2579067435</p></div>
        </div>

        <div className="contactpg-info-card">
          <span className="icon">📍</span>
          <div><h4>Visit Us</h4><p>UG-04, Indialand Global Tech Park, Hinjewadi Phase 1, Pune, Maharashtra 411057</p></div>
        </div>

        <div className="contactpg-info-card">
          <span className="icon">🌐</span>
          <div><h4>Website</h4><p>https://techvishwaguru.com</p></div>
        </div>
      </div>

      <div className="contactpg-right">
        <h2>Send Us a Message</h2>
        <p className="contactpg-subtitle">Fill out the form below and we’ll get back to you.</p>

        <form className="contactpg-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} required />
          <label>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="contactpg-submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
