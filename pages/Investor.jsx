import React from "react";
import "./Investor.css";

const creators = [
  {
    name: "CarryMinati",
    image: "https://yt3.googleusercontent.com/cxE8FStJktJ2oiuv1f-7OHMfJI7ZlMby4NgPDkfJTyV3sOsvdo5pmsAb8TAcJVNor6gNT2h_0w=s900-c-k-c0x00ffffff-no-rj",
    price: "₹120",
    percentage: "2.5%",
    link: "https://www.youtube.com/user/AddictedA1",
  },
  {
    name: "B B Ki Vines",
    image: "https://yt3.googleusercontent.com/H2c8y3sN7j3Hslc_eCun0FSJCQcrYl4zPyhsCt1510INBq1h2vFQTMUOtI4HJNkFD07s0pFlCA=s900-c-k-c0x00ffffff-no-rj",
    price: "₹95",
    percentage: "5%",
    link: "https://www.youtube.com/channel/UCqwUrj10mAEsqezcItqvwEw",
  },
  {
    name: "Ashish Chanchlani",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_kP47aiu-pgZDYOEGCSKXOHPZJUPQb3D0dbYRLhKj_YxrY=s900-c-k-c0x00ffffff-no-rj",
    price: "₹110",
    percentage: "3%",
    link: "https://www.youtube.com/channel/UC7eHZXheF8nVOfwB2PEslMw",
  },
  {
    name: "Technical Guruji",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_nQFOjj2baePBWQGqL0lgv7SwxZ1uXYo8pg_hViDZb6DEsX=s900-c-k-c0x00ffffff-no-rj",
    price: "₹105",
    percentage: "5%",
    link: "https://www.youtube.com/channel/UCOhHO2ICt0ti9KAh-QHvttQ",
  },
];

const Investor = () => {
  const handleBuy = (creatorName) => {
    alert(`You clicked Buy Now for ${creatorName}`);
  };

  return (
    <div className="investor-page">
      <h1>🎯 Explore Top Creators</h1>
      <p>Invest in India's biggest digital stars</p>
      <div className="creator-grid">
        {creators.map((creator, index) => (
          <div key={index} className="creator-card">
            <img src={creator.image} alt={creator.name} className="creator-dp" />
            <h3>{creator.name}</h3>
            <p><strong>Price:</strong> {creator.price}</p>
            <p><strong>Shares:</strong> {creator.percentage}</p>
            <a href={creator.link} target="_blank" rel="noreferrer">🔗 View Channel</a>
            <button className="buy-button" onClick={() => handleBuy(creator.name)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investor;
