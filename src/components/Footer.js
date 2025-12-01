import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <a href="#home" className="footer-logo">
            <div className="footer-logo-icon">
              <i className="fas fa-podcast"></i>
            </div>
            <span>Puthina.Podcast</span>
          </a>
          <p>Insightful conversations, inspiring stories, and meaningful discussions that spark curiosity and drive change.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#latest-episode">Episodes</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://youtube.com/@puthina_podcast" className="social-icon" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://whatsapp.com/channel/0029VbAcxvLB4hdS1KnN1d0V" className="social-icon" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://facebook.com/share/16vZooZwMk" className="social-icon" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/puthina.podcast" className="social-icon" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2024 Puthina.Podcast. All rights reserved.</p>
          <div className="footer-credits">
            <span>Made with</span>
            <span className="footer-heart">♥</span>
            <span>by <a href="#home">Puthina Team</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;