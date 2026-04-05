import "./Contact.css";

export default function Contact() {
  const whatsappNumber = "919952397023"; 
  const message = "Hello Jeno Photography, I'm interested in your services. Can we discuss further?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <span className="contact-tag">Get In Touch</span>
          <h2 className="contact-title">Let’s Create Something Beautiful Together</h2>
        </div>

        <div className="contact-content-grid">
          
          {/* Left Side: Booking Info */}
          <div className="contact-info">
            <div className="info-item">
              <h4>Inquiries</h4>
              <p>jenophotography.trichy@gmail.com</p>
              <p>+91 99523 97023</p>
            </div>

            <div className="info-item">
              <h4>Studio Location</h4>
              <p>Trichy, Tamil Nadu, India</p>
            </div>

            <div className="info-item">
              <h4>Follow Our Journey</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/jeno_photography?igsh=MWx5YXB4dDBqdmZ5eg==" target="_blank">Instagram</a>
                <a href="#" target="_blank">Facebook</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Right Side: Action Box */}
          <div className="contact-action-box">
            <h3>Ready to book your session?</h3>
            <p>We are currently accepting bookings for 2026. Reach out to check our availability.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-cta">
              Inquire via WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Footer Style Links */}
        <div className="contact-footer">
          <div className="footer-line"></div>
          <div className="policy-links">
            <span>&copy; 2026 MV Photography</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Studio Policy</a>
          </div>
        </div>

      </div>
    </section>
  );
}