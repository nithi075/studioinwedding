import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // StudioIn Premium Cinematic Images
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"  
  ];

  const whatsappNumber = "919659414250";
  const message = "Hello StudioIn Weddings, I'm interested in booking a cinematic photography session. Please share your packages.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds for better viewing experience
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" id="hero">
      <div className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-label">The Art of Storytelling</span>
          
          <h1 className="hero-title">
            Preserving Emotions <br />
            <span className="accent-text">Beyond Time</span>
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Cinematic vision meeting authentic heartbeats. We don't just capture images; 
            we frame the soul of your legacy.
            <br />
            <span className="category-tags">Infinity Weddings • Timeless Portraits • Cinematic Legacies</span>
          </p>

          <div className="hero-actions">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-premium">
              Reserve Your Date
            </a>
            <a href="#work" className="btn-outline">
              Explore Portfolio
            </a>
          </div>
        </div>

        <div className="slide-dots">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
 
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  ); 
}