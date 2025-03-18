import React from "react";
import "./Hero.css";
import woman from "../assets/women.png";

const Hero = () => {
  // Function to scroll to the Popular Products section
  const scrollToPopular = () => {
    const popularSection = document.getElementById("popular");
    if (popularSection) {
      popularSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h1 className="hero-title">Discover Your <span>Style</span></h1>
        <p className="hero-subtitle">
          Explore the latest trends in fashion. <br />
          Shop the <span>best collections</span> of the season now!
        </p>

        {/* Call-to-Action Button with Scroll Function */}
        <button className="hero-btn" onClick={scrollToPopular}>Shop Now</button>

        {/* Additional Info */}
        <div className="hero-info">
          <p>🌟 Best Quality</p>
          <p>🚀 Fast Delivery</p>
          <p>💳 Secure Payments</p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hero-right">
        <img src={woman} alt="Fashion Model" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
