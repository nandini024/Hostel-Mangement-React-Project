// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 💌");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-intro">
        <h1>Let’s Connect 🤝</h1>
        <p>Have questions, feedback, or want to say hi? We’re happy to hear from you!</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            📍 <a 
              href="https://www.google.com/maps/place/AMMA+MENS+PG/@17.492189,78.3995964,16.93z/data=!4m14!1m7!3m6!1s0x3bcb9120832b3279:0x504d98a8d8ad95c9!2sAMMA+MENS+PG!8m2!3d17.4921921!4d78.4023018!16s%2Fg%2F11rd01pb90!3m5!1s0x3bcb9120832b3279:0x504d98a8d8ad95c9!8m2!3d17.4921921!4d78.4023018!16s%2Fg%2F11rd01pb90?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#007bff", fontWeight: "bold" }}
            >
              AMMA MEN’S PG, KPHB Road No 1
            </a>
          </p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@project.com</p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h3>Visit Us</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.478529469392!2d78.39749967499835!3d17.4362436018351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9188f10f4d07%3A0xd37c75bbf2b56d4e!2sSree%20Sai%20PG%20for%20Girls!5e0!3m2!1sen!2sin!4v1718104955552!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Hostel Map"
        ></iframe>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li><strong>Q:</strong> How soon do you respond?<br /><strong>A:</strong> Within 24 hours.</li>
          <li><strong>Q:</strong> Can I call you?<br /><strong>A:</strong> Yes! Our phone line is open 9am–6pm.</li>
        </ul>
      </div>

      <div className="support-team">
        <h3>Meet Our Team 💼</h3>
        <div className="team-members">
          <div className="member">
            <img src="https://via.placeholder.com/100" alt="Cutie" />
            <h4>Cutie ❤️</h4>
            <p>UI/UX Designer</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/100" alt="Saiteja" />
            <h4>Karthik </h4>
            <p>Owner</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Still have questions?</h2>
        <p>We’re just one message away. Don’t hesitate to reach out 💬</p>
        <button onClick={() => window.scrollTo(0, 0)}>Contact Now</button>
      </div>

      <footer className="contact-footer">
        <p>© 2025 YourProject | Built with ❤️ by Cutie & Team</p>
      </footer>
    </div>
  );
};

export default Contact;
