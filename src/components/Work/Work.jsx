import { Link } from "react-router-dom";
import "./Work.css";

import weddingImg from "../../assets/wedding.jpeg";
import wedding2Img from "../../assets/wedding-2.jpeg";
import coupleImg from "../../assets/couple.jpeg";
import portraitImg from "../../assets/portrait.jpeg";
import candidImg from "../../assets/candid.jpeg";
import engagementImg from "../../assets/engagement.jpeg";
import receptionImg from "../../assets/reception.jpeg";
import brideImg from "../../assets/bride.jpeg";
import traditionalImg from "../../assets/traditional.jpeg";
import cinematicImg from "../../assets/cinematic.jpeg";

export default function Work() {

  const portfolio = [

    { src: weddingImg, className: "img1", category: "Wedding" },
    { src: candidImg, className: "img4", category: "Candid" },
    { src: coupleImg, className: "img3", category: "Portrait" },
    { src: portraitImg, className: "img2", category: "Couple" },
    { src: wedding2Img, className: "img5", category: "Wedding" },
    { src: receptionImg, className: "img6", category: "Engagement" },
    { src: engagementImg, className: "img7", category: "Reception" },
    { src: brideImg, className: "img8", category: "Bride" },
    { src: traditionalImg, className: "img9", category: "Traditional" },
    { src: cinematicImg, className: "img10", category: "Cinematic" },

  ];

  return (

    <section className="work" id="work">

      {/* HEADER */}
      <div className="work-header">

        <span className="work-tag">Our Portfolio</span>

        <h2 className="work-title">Captured Memories</h2>

        <div className="title-underline"></div>

      </div>


      {/* GRID */}
      <div className="editorial-grid">

        {portfolio.map((item, index) => (

          <div className={`img ${item.className}`} key={index}>

            <img
              src={item.src}
              alt={item.category}
              loading="lazy"
            />

            <div className="overlay">
              {item.category}
            </div>

          </div>

        ))}

      </div>


      {/* BUTTON */}
      <Link to="/gallery">

        <button className="view-more">
          View More
        </button>

      </Link>

    </section>

  );

}