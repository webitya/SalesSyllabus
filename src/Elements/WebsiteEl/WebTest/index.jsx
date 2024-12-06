import React from "react";
import { Carousel } from "antd";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      role: "CEO, Tech Innovators",
      testimonial:
        "The website designed by this team has transformed our online presence. We've seen a significant increase in engagement and sales since the launch!",
    },
    {
      name: "Jane Smith",
      role: "Marketing Director, Creative Agency",
      testimonial:
        "Their attention to detail and creativity exceeded our expectations. Our website not only looks amazing but is also incredibly functional.",
    },
    {
      name: "Michael Brown",
      role: "Founder, Startup Hub",
      testimonial:
        "Working with them was a breeze! They understood our vision and brought it to life in a way that we couldn't have imagined.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear from our satisfied clients who have transformed their businesses with our services.
        </p>

        {/* Ant Design Carousel */}
        <Carousel autoplay dots={true} className="mt-10" speed={500}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-800 italic">
                "{testimonial.testimonial}"
              </p>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
