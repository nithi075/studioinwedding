import "./Services.css";

export default function Services() {
  const servicesList = [
    {
      id: "01",
      title: "Wedding Storytelling",
      desc: "More than just photos—we capture the nervous smiles, the unscripted tears, and the timeless bond of your union.",
      tag: "LUXURY WEDDINGS"
    },
    {
      id: "02",
      title: "Couture Albums",
      desc: "Handcrafted physical legacies printed on high-grade archival paper, designed to be passed down through generations.",
      tag: "PRINTED LEGACY"
    },
    {
      id: "03",
      title: "Cinematic Films",
      desc: "Narrative-driven wedding films with high-end color grading that transforms your memories into a silver-screen experience.",
      tag: "MOTION PICTURE"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        
        {/* Header Section */}
        <div className="services-header">
          <div className="services-tag-wrapper">
            <span className="services-tag">Our Expertise</span>
            <div className="tag-dot"></div>
          </div>
          <h2 className="services-title">
            Bespoke <br/> 
            <span className="title-accent">Visual Artistry</span>
          </h2>
          <p className="services-subtitle">Crafting unique visual narratives tailored to your extraordinary journey.</p>
        </div>

        {/* Services List with Interaction */}
        <div className="services-list-wrapper">
          {servicesList.map((service, index) => (
            <div className="service-row" key={index}>
              <div className="service-id-box">
                <span className="service-number">{service.id}</span>
              </div>
              
              <div className="service-info-box">
                <span className="service-item-tag">{service.tag}</span>
                <h3 className="service-item-title">{service.title}</h3>
                <p className="service-item-desc">{service.desc}</p>
              </div>

              <div className="service-action">
                <div className="service-circle-btn">
                  <div className="btn-inner">
                    <span>Details</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Animated Background Line */}
              <div className="row-bg-line"></div>
              <div className="hover-reveal-glow"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}