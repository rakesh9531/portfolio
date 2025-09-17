// src/sections/Experience.js
import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const Experience = () => (
  <section id="experience" className="content-section">
    <h2 className="section-title">EXPERIENCE</h2>
    <div className="experience-list">
      {PORTFOLIO_DATA.experience.map((job, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <h3 className="job-role">{job.role}</h3>
            <p className="job-duration">{job.duration}</p>
          </div>
          <p className="job-company">{job.company}</p>
          <p className="job-description">{job.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Experience;