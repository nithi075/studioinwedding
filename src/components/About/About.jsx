import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        
        {/* Left Side: Brand Philosophy */}
        <div className="about-header">
          <span className="about-tag">Mastering the Lens — Since 2018</span>
          <h2 className="about-main-title">
            We don't just take <span className="accent-italic">photos</span>, <br />
            we curate your <span className="accent-italic">legacy</span>.
          </h2>
        </div>

        {/* Right Side: Deep Content */}
        <div className="about-details">
          <div className="about-text-group">
            <p className="about-lead">
              At StudioIn Weddings, we see the world in frames. Your love story isn't a checklist; 
              it's a cinematic masterpiece waiting to be told.
            </p>
            <p className="about-body">
              Specializing in luxury wedding cinematography and candid portraiture across Tamil Nadu, 
              our mission is to capture the "in-between" moments—the silent glances, the joyful tears, 
              and the unscripted laughter that defines who you are.
            </p>
          </div>

          {/* New Grid for Philosophy */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">Authentic</span>
              <span className="stat-label">No Forced Poses</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Cinematic</span>
              <span className="stat-label">High-End Visuals</span>
            </div>
          </div>

          <div className="about-footer">
            <div className="signature-line"></div>
            <div className="footer-meta">
              <span className="signature-text">StudioIn Weddings</span>
              <p className="loc-text">Trichy • Madurai • Chennai</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}