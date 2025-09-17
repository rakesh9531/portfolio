// // src/components/Navbar.js
// import React from 'react';

// const Navbar = () => {
//   const navItems = ['Services', 'Projects', 'Experience', 'Skills', 'Contact'];
//   return (
//     <header className="navbar">
//       <div className="nav-brand">Rakesh.</div>
//       <nav className="nav-links">
//         {navItems.map(item => (
//           <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
//         ))}
//       </nav>
//       <a href={`#contact`} className="contact-button">Contact</a>
//     </header>
//   );
// };
// export default Navbar;








// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Services', 'Projects', 'Experience', 'Skills', 'Contact'];

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="navbar">
      <div className="nav-brand">Rakesh.</div>

      {/* --- Desktop Navigation --- */}
      <nav className="nav-links">
        {navItems.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <a href={`#contact`} className="contact-button">Contact</a>

      {/* --- Hamburger Menu Icon (Mobile) --- */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* --- Mobile Navigation Menu --- */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <nav>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;