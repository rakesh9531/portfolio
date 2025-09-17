// src/sections/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Services = () => (
  <section id="services" className="content-section">
    <h2 className="section-title">WHAT I DO</h2>
    <div className="services-grid">
      {PORTFOLIO_DATA.services.map((service, index) => (
        <motion.div 
          className="service-card" 
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Services;