import React from "react";
import "./Gallery.css";

// Assets - Path check pannikonga
import wedding from "../assets/wedding1.jpeg";
import wedding2 from "../assets/img2.jpeg";
import couple from "../assets/img3.jpeg";
import portrait from "../assets/img4.jpeg";
import candid from "../assets/img5.jpeg";
import engagement from "../assets/img6.jpeg";
import reception from "../assets/img7.jpeg";
import bride from "../assets/img9.jpeg";
import traditional from "../assets/img8.jpeg";
import cinematic from "../assets/cinematic.jpeg";

export default function Gallery() {
  const whatsappNumber = "919659414250"; 
  const message = "Hello StudioIn Weddings, I'm looking to book a signature photography session.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const items = [
    { title: "Royal Wedding", img: wedding, isFeatured: true, category: "CEREMONY" },
    { title: "Signature Wedding", img: wedding2, isFeatured: false, category: "LUXURY" },
    { title: "Eternal Couple", img: couple, isFeatured: false, category: "PORTRAITS" },
    { title: "Editorial Portrait", img: portrait, isFeatured: true, category: "VOGUE" },
    { title: "Pure Emotions", img: candid, isFeatured: false, category: "CANDID" },
    { title: "The Promise", img: engagement, isFeatured: false, category: "EVENTS" },
    { title: "Grand Reception", img: reception, isFeatured: false, category: "GRANDEUR" },
    { title: "Bridal Grace", img: bride, isFeatured: true, category: "FASHION" },
    { title: "Cultural Heritage", img: traditional, isFeatured: false, category: "TRADITION" },
    { title: "Cinematic Frames", img: cinematic, isFeatured: false, category: "FILMS" },
  ];

  return (
    <section className="gallery">
      {/* Editorial Header */}
      <div className="gallery-header">
        <div className="header-top">
          <div className="header-line"></div>
          <span className="gallery-tag">The Collective</span>
        </div>
        <h2 className="gallery-title">Capturing <span className="accent">Eternal</span> Legacies</h2>
        <p className="gallery-subtitle">
          A curated selection of our most profound visual stories, 
          crafted for those who value the art of the moment.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-cta"
        >
          <span>Request a Session</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Modern Masonry Grid */}
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div 
            className={`gallery-item ${item.isFeatured ? "featured" : ""}`} 
            key={index}
          >
            <div className="gallery-image-box">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="overlay-top">
                  <span className="item-cat">{item.category}</span>
                </div>
                <div className="overlay-bottom">
                  <h3 className="item-title">{item.title}</h3>
                  <div className="item-arrow">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}