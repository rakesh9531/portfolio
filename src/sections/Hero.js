// src/sections/Hero.js
import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const Hero = () => (
    <section className="hero" id="home">
      <div className="hero-background-gradient"></div>

      <div className="hero-main-content">
          {/* --- Left Column --- */}
          <div className="hero-text-left">
              <h1 className="name-text">I AM<br/>{PORTFOLIO_DATA.firstName}</h1>
              {/* CORRECTED: Pill is now in the left column */}
              <span className="available-pill">
                  <span className="glowing-dot"></span>
                  Available for new opportunities
              </span>
          </div>

          {/* --- Right Column --- */}
          <div className="hero-text-right">
              <div className="hero-image-container">
                  <img src="/profile.png" alt="Rakesh Sharma - Full Stack Developer" />
              </div>
              <div className="hero-role-container">
                  <h3 className="role-text">{PORTFOLIO_DATA.role}</h3>
                  <p className="specialization-text">{PORTFOLIO_DATA.specializations}</p>
              </div>
          </div>
      </div>
      
      <h2 className="greeting-text">Hey, there</h2>
    </section>
);

export default Hero;