import "./Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        
        <div className="services-header">
          <span className="services-tag">Our Expertise</span>
          <h2 className="services-title">Bespoke Services</h2>
          <p className="services-desc">
            We provide complete photography solutions from capture
            to premium album design with timeless elegance.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">01</div>
            <h3>Wedding Shoot</h3>
            <div className="card-line"></div>
            <p>
              Elegant wedding photography capturing
              real emotions and beautiful moments.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>
            <h3>Album Design</h3>
            <div className="card-line"></div>
            <p>
              Premium quality album layouts designed
              with artistic storytelling style.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>
            <h3>Cinematic Video</h3>
            <div className="card-line"></div>
            <p>
              Creative cinematic wedding films with
              smooth editing and color grading.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}