import React from 'react';
import './Hero.css'; // Ensure the CSS file is correctly linked

export const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <img src="/medsurvey.webp"  className="hero-image" />
      <h2 className="hero-title"></h2>
      <p className="hero-subtitle">VIRTUAL HOSPITAL SERVICE APP</p>
    </div>
  );
};
