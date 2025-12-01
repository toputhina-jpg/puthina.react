import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          {/* Title with Mint Leaf Animation */}
          <h1 className="hero-title">
            Puthina.Podcast 
            <img 
              src="/image/Untitled (109 x 109 px).png" 
              alt="Mint Leaf" 
              className="mint-leaf-anim" 
              style={{ width: '0.8em', height: '0.8em' }} 
            />
          </h1>

          <p className="hero-subtitle">Your Weekly Dose of Insightful Conversations</p>
          
          <div className="hero-buttons">
            <a href="#latest-episode" className="btn-primary">
              <span>▶ Watch Latest Episode</span>
            </a>
            <a href="https://youtube.com/@puthina_podcast" className="btn-primary" target="_blank" rel="noopener noreferrer">
              <span>🔔 Subscribe our channel</span>
            </a>
            <a href="contribution.html" className="btn-secondary">
              <span>♥ Support Us</span>
            </a>
          </div>
        </div>

        {/* Logo Container for Big Screens */}
        <div className="hero-logo-container">
          <img 
            src="/image/Untitled design(2).png" 
            alt="Puthina Podcast Logo" 
            className="hero-logo-img" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;