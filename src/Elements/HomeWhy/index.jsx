import React from "react";
import "./HomeWhy.css"; // Ensure to import the CSS file

const WhyChooseSyllabus = () => {
  return (
    <div className="syllabus-section">
      <h2>Why Choose Our Sales Syllabus</h2>
      <p className="section-description">
        Unlock unparalleled sales success by choosing our expertly curated syllabus. Here’s why we stand out.
      </p>
      <div className="syllabus-cards">
        <div className=" card-1">
          <h3>Comprehensive Content</h3>
          <p>Our syllabus covers every aspect of sales, ensuring you’re prepared for all challenges.</p>
        </div>
        <div className=" card-2">
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals with years of hands-on experience.</p>
        </div>
        <div className=" card-3">
          <h3>Practical Assignments</h3>
          <p>Get real-world practice with our hands-on assignments that mirror actual sales tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSyllabus;
