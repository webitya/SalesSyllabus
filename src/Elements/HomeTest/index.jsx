import React from "react";
import Slider from "react-slick";
import { FormatQuote } from "@mui/icons-material";
import "./HomeTest.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Salesyllabus has transformed our approach to sales! The strategies outlined in the guide are practical and easy to implement. Our team saw a 30% increase in sales within the first month. Highly recommended!",
    name: "Raj Jaiswal",
    role: "CEO, Founder",
    image: "/i3.jpg",
  },
  {
    text: "The marketing insights provided by Salesyllabus are invaluable. The guide not only improved our lead generation but also taught us how to nurture those leads effectively. Our conversion rates have never been better!",
    name: "Sara Ahmed",
    role: "CTO",
    image: "/i2.jpg",
  },
  {
    text: "As a small business owner, I struggled with sales techniques until I discovered Salesyllabus. Their comprehensive guide made it easy to understand sales psychology, and I've already seen a noticeable increase in my customer base!",
    name: "John Doe",
    role: "COO",
    image: "i1.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="testimonial-wrapper">
      <h1 className="testimonial-title">Impact We Made</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-quote">
              <span className="quote-icon">
                <FormatQuote />
              </span>
              <p>{testimonial.text}</p>
            </div>
            <div className="testimonial-right">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-author">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
