// src/components/HomePage.js
import React from 'react';
import '../styles.css'; // Import your CSS file for styling

const HomePage = () => {
  return (
    <section className="landing-section">
      {/* NAV SECTION */}
      <nav className="navbar" id="navbar">
        <div className="nav-menu">
          <a href="/">Home</a>
          <a href="/duels">Duels</a>
          <a href="/nfts">NFTs</a>
        </div>
      </nav>

      {/* LANDING BODY */}
      <div className="landing-body">
        <div className="hero-img">
          <img src="https://example.com/your-hero-image.jpg" alt="Hero" />
        </div>

        <div className="hero-text">
          <h1>Welcome to the Duel Arena</h1>
          <p>Your adventure begins here!</p>
        </div>

        <div className="hero-buttons">
          <a href="/duels" className="resume-btn">Start Duel</a>
          <a href="/nfts" className="hero-contact-btn">Explore NFTs</a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
