import React from "react";
import { Link } from "react-router-dom";

const Conclusion = () => {
  return (
    <div className="bg-[#4C6DC7] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Ready to Elevate Your Sales Performance?
        </h2>

        <p className="mt-4 text-lg sm:text-xl">
          At CharanWellness, we are committed to helping you build a strong brand, foster loyal communities, and optimize your sales team’s performance. 
          Our tailored solutions are designed to meet your unique business needs.
        </p>

        <p className="mt-4 text-lg sm:text-xl">
          Let’s work together to achieve your goals and drive your success.
        </p>

        <Link
          to="/contact-us"
          className="mt-8 inline-block bg-[#E6377A] text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-[#4C6DC7]"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default Conclusion;
