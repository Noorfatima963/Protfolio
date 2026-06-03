import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side: Modern Form */}
        <div className="contact-left-form">
          <h2 className="form-heading">Let’s Work Together!</h2>
          <p className="form-subheading">
            Ready to build <span className="highlight">Scalable React & AI Solutions</span>? Fill out the form below.
          </p>
          
          <form className="modern-form">
            <div className="input-group-row">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="input-group-row">
              <input type="email" placeholder="Email address" required />
              <input type="tel" placeholder="Phone number" />
            </div>
            
            <div className="input-group">
              <select defaultValue="" required>
                <option value="" disabled>—Please choose an option—</option>
                <option value="freelance">Freelance Project</option>
                <option value="fulltime">Full-time Role</option>
                <option value="other">Other</option>


              </select>
            </div>
            
            <div className="input-group">
              <textarea placeholder="Tell me about your project needs..." rows="6" required></textarea>
            </div>
            
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side: Info & Icons */}
        <div className="contact-right-info">
          <div className="info-header">
            {/* Logo icon place */}
            <div className="info-logo-container">🌐</div>
            <h2 className="info-heading">Get In Touch</h2>
          </div>
          
          <div className="info-items-list">
            <div className="info-item-box">
              <div className="icon-circle phone-icon">📞</div>
              <div className="item-text">
                <h3>Phone</h3>
                <p>your-phone-number</p>
              </div>
            </div>
            
            <div className="info-item-box">
              <div className="icon-circle email-icon">✉</div>
              <div className="item-text">
                <h3>Email</h3>
                <p>noor.developer@email.com</p>
              </div>
            </div>
            
            <div className="info-item-box">
              <div className="icon-circle address-icon">📍</div>
              <div className="item-text">
                <h3>Address</h3>
                <p>Gujrat, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;