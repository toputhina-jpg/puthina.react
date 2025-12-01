import React from 'react';

function LatestEpisode() {
  return (
    <section id="latest-episode" className="section">
      <div className="container-max">
        <h2 className="section-title">Latest Episode</h2>

        <div className="episode-desktop glass-section" style={{ padding: '1.5rem' }}>
          <div className="episode-video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/w4hzhpipPR0?si=sgdncJ7ShrUP-OTj" 
              allowFullScreen
              loading="lazy"
              title="Main Video"
            ></iframe>
          </div>
          <div className="episode-info">
            <h3 className="episode-title">𝗚𝗿𝗲𝗮𝘁𝗻𝗲𝘀𝘀 𝗼𝗳 𝗴𝗿𝗲𝗲𝘁𝗶𝗻𝗴𝘀| 𝗣𝘂𝘁𝗵𝗶𝗻𝗮 𝗣𝗼𝗱𝗰𝗮𝘀𝘁🎙️</h3>
            <p className="episode-description">In this insightful episode, we dive deep into the world of artificial intelligence, explore cutting-edge innovations, and discuss what the future holds.</p>
          </div>
        </div>

        <div className="episode-mobile">
          <a href="https://www.youtube.com/embed/w4hzhpipPR0?si=sgdncJ7ShrUP-OTj" className="glass-card" style={{ display: 'block', overflow: 'hidden', textDecoration: 'none' }}>
            <img 
              src="/image/WhatsApp Image 2025-10-30 at 5.52.32 PM.jpeg" 
              alt="Latest Episode" 
              style={{ width: '100%', height: '10rem', objectFit: 'cover' }} 
            />
            <div style={{ padding: '1rem' }}>
              <h3 className="episode-title" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>The Future of Technology: AI, Innovation & Beyond</h3>
              <p className="episode-description" style={{ fontSize: '0.875rem' }}>Exploring AI, innovation, and the future of tech</p>
              <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '0.875rem' }}>Watch Now</button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestEpisode;