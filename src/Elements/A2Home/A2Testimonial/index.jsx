import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sagar Naidu",
    position: "Founder, Deva Consulting",
    testimonial: "Sales Syllabus helped transform our business operations by providing data-driven solutions. They assisted us in identifying new market opportunities and building an effective sales team.",
    image: "/1.png",
  },
  {
    name: "Ramakrishna",
    position: "CEO, Neucode",
    testimonial: "Sales Syllabus guided us in preparing our startup business plan, complete with a comprehensive marketing strategy. Their clarity enabled us to establish effective pricing and a go-to-market strategy, including financial planning.",
    image: "/2.png",
  },
  {
    name: "Akshay Rahod",
    position: "Sales Manager, GMMSP",
    testimonial: "Sales Syllabus developed a sales and marketing process that has become an invaluable organizational asset for us. They addressed our hiring challenges and improved our sales reporting.",
    image: "/3.png",
  },
  {
    name: "Anand Core",
    position: "Founder, Edufox",
    testimonial: "The insights provided by Sales Syllabus have driven our content marketing forward. They also delivered a detailed roadmap for drafting our investment thesis for fundraising.",
    image: "/4.png",
  },
  {
    name: "Pushpak Kypuram",
    position: "CEO, The Qube.ai",
    testimonial: "The Sales Syllabus team gave us greater visibility into our business and assisted in preparing a business plan and marketing strategy. Their data-driven approach is precise and delivers high success rates.",
    image: "/1.png",
  },
  {
    name: "Digital Edu IT Solution",
    position: "Marketing Team",
    testimonial: "They understand our business well and have developed an effective sales and marketing process. They even went above and beyond by assisting us in live meetings.",
    image: "/2.png",
  },
  {
    name: "Yofundo (JHA Mobi Technology)",
    position: "Co-founder",
    testimonial: "Sales Syllabus is a professional team that provides high-quality sales and marketing solutions. Their impact is clear and measurable.",
    image: "/3.png",
  },
];

const A2Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="testimonials-wrapper py-16 bg-gray-100">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-6">
        What Our Clients Say
      </h2>
      <div className="mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-box p-8 flex flex-col items-center text-center bg-white rounded-lg shadow-md border border-gray-200 mx-2"
            >
              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mb-4 shadow-sm"
                />
              </div>
              <p className="text-base text-gray-700 italic mb-4">
                {item.testimonial}
              </p>
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default A2Testimonials;
