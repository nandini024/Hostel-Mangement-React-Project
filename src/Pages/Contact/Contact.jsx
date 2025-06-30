import React from "react";
import "./Contact.css";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="full-contact-page">
      {/* Top Heading */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help you. Reach out to us anytime! 💬</p>
      </div>

      {/* Intro Section */}
      <div className="contact-intro">
        <p>
          If you have any questions regarding hostel availability, bookings, or anything
          else, our team is always happy to assist. Use the details below or fill out
          the form to get in touch.
        </p>
      </div>

      {/* Contact Info + Map */}
      <div className="contact-section">
        {/* Left - Contact Info */}
        <div className="contact-left">
          <h2>Contacts</h2>
          <p>
            Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
            nibh venenatis cras sed.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>(329) 580-7077</p>
                <p>(650) 382-5020</p>
              </div>
            </div>

            <div className="contact-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>contact@hosteller.com</p>
                <p>support@hosteller.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>54826 Fadel Circles</p>
                <p>Darrlystad, AZ 90995</p>
              </div>
            </div>

            <div className="contact-card">
              <FaClock className="icon" />
              <div>
                <h4>Working Time</h4>
                <p>Everyday</p>
                <p>10 am — 8 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Map */}
        <div className="contact-right">
          <iframe
            title="Hostel Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0103%2C40.7077%2C-73.9757%2C40.7306&amp;layer=mapnik"
            loading="lazy"
            style={{ border: 0, width: "100%", height: "100%", borderRadius: "10px" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 💌 Contact Form with Image */}
      <div className="form-image-section">
        <div className="form-box">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="form-image" />
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="logo">🏨 Hosteller</h3>
            <p>
              Ut tellus elementum sagittis vitae et leo duis ut. Sit amet consectetur
              adipiscing elit duis. Ultrices gravida dictum fusce ut.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/rooms">Rooms</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📍 54826 Fadel Circles<br />Darrylstad, AZ 90995</p>
            <p>📞 (329) 580-7077</p>
            <p>📧 contact@hosteller.com</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Venenatis urna</p>
            <p>cursus eget nunc</p>
            <p>scelerisque</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
