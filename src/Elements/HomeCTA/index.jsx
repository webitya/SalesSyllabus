import React from "react";
import "./homecta.css"; // Import the CSS file for styling

const CallToAction = () => {
  return (
    <div className="cta-container">
      <h1 className="cta-heading">Elevate Your Sales Strategy!</h1>
      <p className="cta-paragraph">
        Join our community of successful marketers and unlock the secrets to effective selling. 
        Transform your business with our expert sales guides designed to boost your revenue and growth.
      </p>
      <a href="/contact-us" className="cta-button">
        Join Us Today
      </a>
    </div>
  );
};

export default CallToAction;

