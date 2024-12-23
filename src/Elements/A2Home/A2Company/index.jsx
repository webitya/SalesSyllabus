// A2Company.js
import React from "react";
import Slider from "react-slick";
import './A2Company.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companyLogos = [
  { name: "Company 1", logo: "/team1.svg", color: "#2B3C73" },
  { name: "Company 2", logo: "/team2.webp", color: "white" },
  { name: "Company 3", logo: "/team3.png", color: "white" },
  { name: "Company 4", logo: "/team4.webp", color: "white" },
  { name: "Company 5", logo: "/team5.png", color: "white" },
  { name: "Company 6", logo: "/team15.webp", color: "white" },
  { name: "Company 7", logo: "/team16.png", color: "white" },
  { name: "Company 8", logo: "/team17.png", color: "white" },
  { name: "Company 10", logo: "/team6.png", color: "white" },
  { name: "Company 11", logo: "/team7.png", color: "white" },
  { name: "Company 12", logo: "/team8.png", color: "white" },
  { name: "Company 13", logo: "/team9.png", color: "white" },
  { name: "Company 14", logo: "/team10.png", color: "white" },
  { name: "Company 15", logo: "/team11.png", color: "white" },
  { name: "Company 16", logo: "/team12.png", color: "white" },
  { name: "Company 17", logo: "/team13.png", color: "white" },

  
];

const A2Company = () => {
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

  // Function to determine the background color based on the logo color
  const getBackgroundColor = (color) => {
    return color === "white" ? "#2B3C73" : color; // Dark background for white logos
  };

  return (
    <div className="trusted-companies-wrapper py-6 pb-10 bg-gray-300">
      <h1 className="trusted-title text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
        100+ Top Companies Trust Us
      </h1>
  <p className="trusted-description text-center text-lg text-gray-600 mb-1">
  Sales Syllabus is a premium business consulting company specializing in achieving business transformation by optimizing sales and marketing functions. Through the implementation of our in-house Sales Syllabus Pro Framework, we enable entire sales and marketing teams to deliver measurable and impactful outcomes.
      </p>
  <p className="trusted-description text-center text-lg text-gray-600 mb-3">
        <span className="font-bold text-zinc-600">Our framework</span> is trusted by leading companies around the globe for its innovation, reliability, and results.
      </p>
      <div className="logo-container max-w-6xl mx-auto">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <div 
              key={index} 
              className="logo-box flex items-center justify-center py-6 px-4" 
              style={{ backgroundColor: getBackgroundColor(company.color), borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <img src={company.logo} alt={company.name} className="company-logo mx-auto h-8 lg:h-10" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default A2Company;
