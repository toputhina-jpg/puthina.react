import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-max">
        <h2 className="section-title">Get in Touch</h2>
        <form 
            action="https://formcarry.com/s/zoKrdJwDE1E" 
            method="POST" 
            id="contact-form" 
            className="contact-form glass-card"
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message / Review</label>
            <textarea id="message" name="message" placeholder="Your message or review here..." required></textarea>
          </div>

          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;