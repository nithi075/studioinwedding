import { useState, useEffect } from "react";
import "./Navbar.css";
import logoImg from "../../assets/logo.png"; // Replace with your logo path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pro-level Scroll Lock (Prevents navbar/background jump on mobile)
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "nav-scrolled" : ""} ${menuOpen ? "nav-active" : ""}`}>
        <div className="nav-container">
          
          {/* Logo Section */}
          <a href="#hero" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <div className="logo-holder">
               <img src={logoImg} alt="StudioIn Weddings" className="brand-logo-img" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="nav-links">
            <a href="#hero" className="nav-item">Home</a>
            <a href="#about" className="nav-item">The Studio</a>
            <a href="#work" className="nav-item">Portfolio</a>
            <a href="#gallery" className="nav-cta">Book Now</a>
          </div>

          {/* Hamburger Toggle */}
          <button 
            className={`menu-toggle ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="hamburger">
              <span className="line-t"></span>
              <span className="line-b"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "show" : ""}`}>
        <div className="overlay-bg-text">STUDIOIN</div>
        
        <div className="mobile-links">
          <a href="#hero" style={{ "--i": 1 }} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" style={{ "--i": 2 }} onClick={() => setMenuOpen(false)}>The Studio</a>
          <a href="#work" style={{ "--i": 3 }} onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#gallery" style={{ "--i": 4 }} className="gradient-link" onClick={() => setMenuOpen(false)}>
            View Gallery
          </a>
        </div>

        <div className="mobile-footer">
          <p>TIRUCHIRAPPALLI • TAMIL NADU</p>
          <div className="social-mini">Instagram • WhatsApp</div>
        </div>
      </div>
    </>
  );
}