import React from "react";
import Slider from "react-slick";
import './hometrust.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companyLogos = [
  { name: "Company 1", logo: "/team1.svg", color: "#2B3C73" },
  { name: "Company 2", logo: "/team2.webp", color: "white" },
  { name: "Company 3", logo: "/team3.png", color: "white" },
  { name: "Company 4", logo: "/team4.webp", color: "white" },
  { name: "Company 5", logo: "/team5.png", color: "white" },
];

const TrustedCompanies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="trusted-companies-wrapper">
      <h1 className="trusted-title">200+ Top Companies Trust Us</h1>
      <p className="trusted-description">
        Our platform is trusted by leading companies around the globe for its innovation, reliability, and results.
      </p>
      <div className="logo-container">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <div 
              key={index} 
              className="logo-box flex items-center justify-center" 
              style={{ backgroundColor: company.color || 'white' }}
            >
              <img src={company.logo} alt={company.name} className="company-logo mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustedCompanies;
