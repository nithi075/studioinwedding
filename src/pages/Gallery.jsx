import React from "react";
import "./Gallery.css";

// Replace these with your actual local file paths
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
  const items = [
    { title: "Wedding Photography", img: wedding, isFeatured: true },
    { title: "Signature Wedding", img: wedding2, isFeatured: false },
    { title: "Couple Moments", img: couple, isFeatured: false },
    { title: "Portrait Studio", img: portrait, isFeatured: true },
    { title: "Candid Photography", img: candid, isFeatured: false },
    { title: "Engagement Shoot",       img: engagement, isFeatured: false },
    { title: "Reception Coverage",  img: reception, isFeatured: false },
    { title: "Bridal Portraits",  img: bride, isFeatured: true },
    { title: "Traditional Wedding",  img: traditional, isFeatured: false },
    { title: "Cinematic Shoots",  img: cinematic, isFeatured: false },
  ];

  return (
    <section className="gallery">
      {/* Header Section */}
      <div className="gallery-header">
        <span className="gallery-tag">Portfolio Collection</span>
        <h2 className="gallery-title">Timeless Visual Stories</h2>
        <p className="gallery-subtitle">
          Explore our signature photography collections crafted
          with timeless elegance and cinematic storytelling.
        </p>
        <a
          href="https://wa.me/919952397023?text=Hello%20MV%20Photography,%20I%20want%20to%20book%20a%20photoshoot"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-cta"
        >
          Book Your Session
        </a>
      </div>

      {/* Grid Section */}
      <div className="gallery-masonry">
        {items.map((item, index) => (
          <div 
            className={`gallery-item ${item.isFeatured ? "featured" : ""}`} 
            key={index}
          >
            <div className="gallery-image-box">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-info">
                <span className="item-category">{item.category}</span>
                <h3 className="item-title">{item.title}</h3>
                <div className="item-arrow">→</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}