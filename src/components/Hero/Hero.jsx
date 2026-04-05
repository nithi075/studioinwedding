import "./Hero.css";
import heroImage from "../../assets/hero.jpeg";

export default function Hero() {
  const whatsappNumber = "919952397023";
  const message = "Hello MV Photography, I would like to book a luxury photography session. Please share details.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="hero" id="hero">
      {/* Background Image Container */}
      <div className="hero-bg">
        <img src={heroImage} alt="Luxury Photography" className="hero-img" />
        <div className="hero-vignette"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-tag">EST. 2024 • PREMIUM STUDIO</span>
          
          <h1 className="hero-title">
            Capturing Moments <br />
            <span className="accent-text">That Feel Timeless</span>
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Luxury storytelling through cinematic photography. <br />
            <span>Wedding • Pre-Wedding • Couple • Portrait </span>
          </p>

          <div className="hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              <span>Book Luxury Session</span>
            </a>
            <a href="#work" className="btn-outline">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
      
     
    </section>
  );
}