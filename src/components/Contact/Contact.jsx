import "./Contact.css";

export default function Contact() {
  const whatsappNumber = "919659414250"; 
  const message = "Hello StudioIn Weddings, I'm interested in your services. Can we discuss further?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        {/* TOP SECTION */}
        <div className="contact-header">
          <div className="contact-tag-wrapper">
            <div className="tag-line-short"></div>
            <span className="contact-tag">Get In Touch</span>
          </div>
          <h2 className="contact-title">
            Let’s create <span className="accent-italic">timeless</span> <br /> 
            art together.
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="contact-grid">
          
          {/* Left: Detailed Info */}
          <div className="contact-details">
            <div className="detail-group">
              <span className="detail-label">Direct Inquiries</span>
              <a href="mailto:hello@studioinweddings.com" className="detail-link">hello@studioinweddings.com</a>
              <a href="tel:+919659414250" className="detail-link">+91 96594 14250</a>
            </div>

            <div className="detail-group">
              <span className="detail-label">Main Studio</span>
              <p className="detail-text">Trichy & Madurai, <br/> Tamil Nadu, India</p>
            </div>

            <div className="detail-group">
              <span className="detail-label">Socials</span>
              <div className="social-links-grid">
                <a href="https://www.instagram.com/jeno_photography" target="_blank" rel="noopener noreferrer" className="social-item">Instagram</a>
                <a href="#" className="social-item">Facebook</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-item">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Right: Premium Booking Card */}
          <div className="booking-card">
            <div className="booking-status">
              <div className="pulse-dot"></div>
              <span>Limited Availability for 2026</span>
            </div>
            <h3 className="card-title">Ready to tell your story?</h3>
            <p className="card-desc">We curate bespoke cinematic experiences. Reach out to secure your date in our limited calendar.</p>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-premium">
              <span>Check Availability</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

        {/* FOOTER */}
        <div className="contact-bottom">
          <div className="bottom-divider"></div>
          <div className="footer-meta">
            <p className="copyright-text">© 2026 StudioIn Weddings</p>
            <div className="meta-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}