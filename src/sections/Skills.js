// src/sections/Skills.js
import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const Skills = () => (
  <section id="skills" className="content-section">
    <h2 className="section-title">SKILLS</h2>
    <div className="skills-grid">
      {PORTFOLIO_DATA.skills.map(skill => (
        <div key={skill} className="skill-chip">{skill}</div>
      ))}
    </div>
  </section>
);
export default Skills;