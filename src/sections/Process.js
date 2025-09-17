// src/sections/Process.js

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data'; // Use the correct SITE_DATA import

const Process = () => (
  <>
    {SITE_DATA.process.map((item, index) => (
      <motion.div 
        className="process-item" 
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="process-step">{item.step}</div>
        <div className="process-content">
          <h3 className="process-title">{item.title}</h3>
          <p className="process-description">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </>
);

export default Process;