import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? "nav-scroll" : ""} ${menuOpen ? "nav-active" : ""}`}>
      <div className="nav-container">
        <h2 className="logo">
          Jeno
           <span>Photography</span>
        </h2>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#hero" className="link-item">Home</a>
          <a href="#about" className="link-item">About</a>
          <a href="#work" className="link-item">Portfolio</a>
          <a href="#gallery" className="nav-btn-premium">Gallery</a>
        </div>

        {/* Mobile icon (Humburger) */}
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line top"></span>
          <span className="line mid"></span>
          <span className="line bot"></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#gallery" className="mob-contact" onClick={() => setMenuOpen(false)}>Gallery</a>
        </div>
      </div>
    </nav>
  );
}