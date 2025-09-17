// src/sections/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const Projects = () => (
  <section id="projects" className="content-section">
    <h2 className="section-title">RECENT PROJECTS</h2>
    <div className="projects-grid">
      {PORTFOLIO_DATA.projects.map(project => (
        <motion.div 
          key={project.title} className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-image"><img src={project.imageUrl} alt={project.title} /></div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Projects;