import React, { useState, useEffect } from 'react';

function Navbar() {
  // 1. സ്റ്റേറ്റുകൾ (States)
  // മൊബൈൽ മെനു തുറന്നിട്ടുണ്ടോ എന്ന് നോക്കാൻ
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // പേജ് സ്ക്രോൾ ചെയ്തിട്ടുണ്ടോ എന്ന് നോക്കാൻ
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. സ്ക്രോൾ ചെയ്യുമ്പോൾ ഹെഡറിന്റെ സ്റ്റൈൽ മാറ്റാൻ (useEffect)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // ക്ലീൻ അപ്പ് (ഇത് എപ്പോഴും നല്ലതാണ്)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 3. മെനു ടോഗിൾ ചെയ്യാനുള്ള ഫംഗ്ഷൻ
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header Section */}
      {/* സ്ക്രോൾ ചെയ്താൽ 'scrolled' എന്ന ക്ലാസ്സ് വരും */}
      <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-container">
          
          {/* Logo */}
          <a href="#home" className="logo">
            {/* Note: public folder-il ninnum image edukkan munpil '/' idanam */}
            <img src="/image/Untitled design(1).png" alt="Logo" className="logo-img" />
            <span>Puthina.Podcast</span>
          </a>

          {/* Desktop Menu */}
          <nav className="nav-desktop">
            <a href="#home" className="active">Home</a>
            <a href="#latest-episode">Episodes</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            id="menu-toggle" 
            className="menu-btn" 
            onClick={toggleMenu} // ക്ലിക്ക് ചെയ്യുമ്പോൾ ഫംഗ്ഷൻ വിളിക്കുന്നു
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div 
        id="overlay" 
        className={`overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu} // പുറത്ത് ക്ലിക്ക് ചെയ്താൽ മെനു അടയും
      ></div>

      {/* Mobile Navigation Menu */}
      <nav id="mobile-menu" className={`nav-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#latest-episode" onClick={toggleMenu}>Episodes</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
    </>
  );
}

export default Navbar;