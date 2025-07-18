// // import React from "react";
// // import "./Contact.css";
// // import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

// // const Contact = () => {
// //   return (
// //     <div className="full-contact-page">
// //       {/* Top Heading */}
// //       <div className="contact-header">
// //         <h1>Contact Us</h1>
// //         <p>We’re here to help you. Reach out to us anytime! 💬</p>
// //       </div>

// //       {/* Intro Section */}
// //       <div className="contact-intro">
// //         <p>
// //           If you have any questions regarding hostel availability, bookings, or anything
// //           else, our team is always happy to assist. Use the details below or fill out
// //           the form to get in touch.
// //         </p>
// //       </div>

// //       {/* Contact Info + Map */}
// //       <div className="contact-section">
// //         {/* Left - Contact Info */}
// //         <div className="contact-left">
// //           <h2>Contacts</h2>
// //           <p>
// //             Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
// //             nibh venenatis cras sed.
// //           </p>

// //           <div className="contact-grid">
// //             <div className="contact-card">
// //               <FaPhone className="icon" />
// //               <div>
// //                 <h4>Phone</h4>
// //                 <p>(329) 580-7077</p>
// //                 <p>(650) 382-5020</p>
// //               </div>
// //             </div>

// //             <div className="contact-card">
// //               <FaEnvelope className="icon" />
// //               <div>
// //                 <h4>Email</h4>
// //                 <p>contact@hosteller.com</p>
// //                 <p>support@hosteller.com</p>
// //               </div>
// //             </div>

// //             <div className="contact-card">
// //               <FaMapMarkerAlt className="icon" />
// //               <div>
// //                 <h4>Location</h4>
// //                 <p>54826 Fadel Circles</p>
// //                 <p>Darrlystad, AZ 90995</p>
// //               </div>
// //             </div>

// //             <div className="contact-card">
// //               <FaClock className="icon" />
// //               <div>
// //                 <h4>Working Time</h4>
// //                 <p>Everyday</p>
// //                 <p>10 am — 8 pm</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right - Map */}
// //         <div className="contact-right">
// //           <iframe
// //             title="Hostel Location"
// //             src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0103%2C40.7077%2C-73.9757%2C40.7306&amp;layer=mapnik"
// //             loading="lazy"
// //             style={{ border: 0, width: "100%", height: "100%", borderRadius: "10px" }}
// //             allowFullScreen
// //           ></iframe>
// //         </div>
// //       </div>

// //       {/* 💌 Contact Form with Image */}
// //       <div className="form-image-section">
// //         <div className="form-box">
// //           <h2>Send Us a Message</h2>
// //           <form>
// //             <input type="text" placeholder="Your Name" required />
// //             <input type="email" placeholder="Your Email" required />
// //             <textarea placeholder="Your Message" rows="4" required></textarea>
// //             <button type="submit">Send Message</button>
// //           </form>
// //         </div>
// //         <div className="form-image" />
// //       </div>

// //       {/* Footer Section */}
// //       <footer className="footer">
// //         <div className="footer-content">
// //           <div className="footer-section">
// //             <h3 className="logo">🏨 Hosteller</h3>
// //             <p>
// //               Ut tellus elementum sagittis vitae et leo duis ut. Sit amet consectetur
// //               adipiscing elit duis. Ultrices gravida dictum fusce ut.
// //             </p>
// //           </div>

// //           <div className="footer-section">
// //             <h4>Quick Links</h4>
// //             <ul>
// //               <li><a href="/">Home</a></li>
// //               <li><a href="/about">About</a></li>
// //               <li><a href="/rooms">Rooms</a></li>
// //               <li><a href="/contact">Contact</a></li>
// //             </ul>
// //           </div>

// //           <div className="footer-section">
// //             <h4>Contact Us</h4>
// //             <p>📍 54826 Fadel Circles<br />Darrylstad, AZ 90995</p>
// //             <p>📞 (329) 580-7077</p>
// //             <p>📧 contact@hosteller.com</p>
// //           </div>

// //           <div className="footer-section">
// //             <h4>Follow Us</h4>
// //             <p>Venenatis urna</p>
// //             <p>cursus eget nunc</p>
// //             <p>scelerisque</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Contact;

// import React from "react";
// import "./Contact.css";
// import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       {/* Hero Header */}
//       <section className="contact-hero">
//         <h1>Get in Touch 📞</h1>
//         <p>We’re here for your hostel queries, 24/7 support guaranteed!</p>
//       </section>

//       {/* Info Cards Section */}
//       <section className="contact-info">
//         <div className="info-card">
//           <FaPhone className="icon" />
//           <h3>Phone</h3>
//           <p>(329) 580-7077</p>
//           <p>(650) 382-5020</p>
//         </div>
//         <div className="info-card">
//           <FaEnvelope className="icon" />
//           <h3>Email</h3>
//           <p>contact@hosteller.com</p>
//           <p>support@hosteller.com</p>
//         </div>
//         <div className="info-card">
//           <FaMapMarkerAlt className="icon" />
//           <h3>Location</h3>
//           <p>54826 Fadel Circles</p>
//           <p>Darrylstad, AZ 90995</p>
//         </div>
//         <div className="info-card">
//           <FaClock className="icon" />
//           <h3>Hours</h3>
//           <p>Everyday</p>
//           <p>10:00 AM – 8:00 PM</p>
//         </div>
//       </section>

//       {/* Map and Form Section */}
//       <section className="contact-main">
//         {/* Map */}
//         <div className="contact-map">
//           <iframe
//             title="Hostel Map"
//             src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0103%2C40.7077%2C-73.9757%2C40.7306&amp;layer=mapnik"
//             loading="lazy"
//             style={{ border: 0, width: "100%", height: "100%", borderRadius: "10px" }}
//             allowFullScreen
//           ></iframe>
//         </div>

//         {/* Form */}
//         <div className="contact-form">
//           <h2>Send a Message 💌</h2>
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea placeholder="Your Message..." rows="5" required></textarea>
//             <button type="submit">Send Now</button>
//           </form>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="why-us">
//         <h2>Why Choose Our Hostel?</h2>
//         <div className="why-cards">
//           <div className="why-card">
//             <h3>🔒 Secure Environment</h3>
//             <p>24x7 surveillance and strict entry protocols ensure complete safety for all residents.</p>
//           </div>
//           <div className="why-card">
//             <h3>🧹 Daily Cleaning</h3>
//             <p>Hygiene is a top priority with our daily housekeeping and sanitized rooms.</p>
//           </div>
//           <div className="why-card">
//             <h3>⚡ Fast WiFi</h3>
//             <p>High-speed internet access throughout the hostel for uninterrupted study & fun.</p>
//           </div>
//         </div>
//       </section>

//       {/* Support Team Section */}
//       <section className="team-section">
//         <h2>Meet Our Support Team 💁‍♂️💁‍♀️</h2>
//         <div className="team-grid">
//           <div className="team-member">
//             <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John" />
//             <h4>John Doe</h4>
//             <p>Hostel Manager</p>
//           </div>
//           <div className="team-member">
//             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Anu" />
//             <h4>Anu Sharma</h4>
//             <p>Support Executive</p>
//           </div>
//           <div className="team-member">
//             <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="Ravi" />
//             <h4>Ravi Kumar</h4>
//             <p>Maintenance Head</p>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="gallery">
//         <h2>Hostel Life Glimpses 📸</h2>
//         <div className="gallery-grid">
//           <img src="https://source.unsplash.com/400x300/?hostel,room" alt="Room" />
//           <img src="https://source.unsplash.com/400x300/?study,students" alt="Study Area" />
//           <img src="https://source.unsplash.com/400x300/?food,dining" alt="Dining" />
//           <img src="https://source.unsplash.com/400x300/?hostel,lounge" alt="Lounge" />
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <h2>Frequently Asked Questions ❓</h2>
//         <div className="faq-box">
//           <h4>🛌 Can I choose my roommate?</h4>
//           <p>Yes, you can request during registration. We'll do our best to match preferences.</p>

//           <h4>🍽️ Are meals included?</h4>
//           <p>Yes, we provide 3 meals daily with a mix of veg/non-veg options.</p>

//           <h4>🕐 Is there a curfew?</h4>
//           <p>Yes, for safety, the main gate closes at 10:00 PM daily.</p>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="newsletter">
//         <h2>Stay Updated ✉️</h2>
//         <p>Subscribe to receive hostel announcements, admission dates & offers.</p>
//         <form className="newsletter-form">
//           <input type="email" placeholder="Enter your email" required />
//           <button type="submit">Subscribe</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import "./Contact.css";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Header */}
      <section className="contact-hero">
        <h1>Get in Touch 📞</h1>
        <p>We’re here for your hostel queries, 24/7 support guaranteed!</p>
      </section>

      {/* Info Cards Section */}
      <section className="contact-info">
        <div className="info-card">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>(329) 580-7077</p>
          <p>(650) 382-5020</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>contact@hosteller.com</p>
          <p>support@hosteller.com</p>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Location</h3>
          <p>54826 Fadel Circles</p>
          <p>Darrylstad, AZ 90995</p>
        </div>
        <div className="info-card">
          <FaClock className="icon" />
          <h3>Hours</h3>
          <p>Everyday</p>
          <p>10:00 AM – 8:00 PM</p>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="contact-main">
        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Hostel Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0103%2C40.7077%2C-73.9757%2C40.7306&amp;layer=mapnik"
            loading="lazy"
            style={{ border: 0, width: "100%", height: "100%", borderRadius: "10px" }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h2>Send a Message </h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message..." rows="5" required></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose Our Hostel?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>🔒 Secure Environment</h3>
            <p>24x7 surveillance and strict entry protocols ensure complete safety for all residents.</p>
          </div>
          <div className="why-card">
            <h3>🧹 Daily Cleaning</h3>
            <p>Hygiene is a top priority with our daily housekeeping and sanitized rooms.</p>
          </div>
          <div className="why-card">
            <h3>⚡ Fast WiFi</h3>
            <p>High-speed internet access throughout the hostel for uninterrupted study & fun.</p>
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="team-section">
        <h2>Meet Our Support Team </h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John" />
            <h4>John Doe</h4>
            <p>Hostel Manager</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Anu" />
            <h4>Anu Sharma</h4>
            <p>Support Executive</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="Ravi" />
            <h4>Ravi Kumar</h4>
            <p>Maintenance Head</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Hostel Life Glimpses 📸</h2>
 <div className="gallery-grid">
  <img
    src="https://images.openai.com/thumbnails/url/I31tnXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw42C8nLywlMNcqOzDExT8swzww18_BLcTSOjMp2C3U3D0gN98wIMLbITov3zQsuyi5LKgwsTdR1DYt3dFQrBgALiCmD"
    alt="Cozy hostel room with warm wooden tones"
  />
  <img
    src="https://images.openai.com/thumbnails/url/N1DeD3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7U9TFPyrT0KyhKNCiI8PZPMvAsrkjzDvIICg5PzMg0Co10ynIKcC_Pygq2SPSpTDIu9a80za7S9fZRKwYAut4pBw"
    alt="Shared bunk beds in bright natural light"
  />
  <img
    src="https://images.openai.com/thumbnails/url/TS2bhXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6MCs7yNMpOK4xKNMhNzzTNLa4KNnQxS3eO8rJwMa0KyPQOdNe1MHXMD81K9I9PKylKDPN0Ci82S9JVKwYAvaIosw"
    alt="Modern lounge area in a stylish hostel"
  />
  <img
    src="https://images.openai.com/thumbnails/url/opdig3icu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4xy_JKLvPVdaqKqAgo9U2LNy4NK0qLyvcKN3BLM_ROc0qxzA8szy0tiij0yHAt8_UPd7JwDc2usPA3K1crBgAqoCo_"
    alt="Cozy study nook inside hostel"
  />
</div>



      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions ❓</h2>
        <div className="faq-box">
          <h4>🛏️ Can I choose my roommate?</h4>
          <p>Yes, you can request during registration. We'll do our best to match preferences.</p>
          <h4>🍽️ Are meals included?</h4>
          <p>Yes, we provide 3 meals daily with a mix of veg/non-veg options.</p>
          <h4>🕐 Is there a curfew?</h4>
          <p>Yes, for safety, the main gate closes at 10:00 PM daily.</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay Updated ✉️</h2>
        <p>Subscribe to receive hostel announcements, admission dates & offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

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
