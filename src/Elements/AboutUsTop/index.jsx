import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const upDownAnimation = {
    y: [0, -10, 0], // Move up 10px and back to original position
    transition: {
      duration: 2, // Smooth movement over 2 seconds
      ease: "easeInOut", // For a smooth easing effect
      repeat: Infinity, // Repeat infinitely
      repeatType: "reverse" // Reverse direction after each cycle
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 text-gray-800 h-screen flex items-center">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Text Content with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-2xl mb-8 lg:mb-0"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Empowering Businesses with Strategy, Technology, & Growth
          </h1>
          <p className="text-lg sm:text-2xl mb-6 text-gray-600">
            At Sales Syllabus, we provide top-tier sales and marketing solutions to drive measurable success.
          </p>
          <Link to="/contact-us">
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<ArrowRightOutlined />}
              className="bg-gradient-to-r from-purple-400 to-blue-400 border-none text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-500"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Right Side - Up-and-Down Animated Image */}
        <motion.div
          animate={upDownAnimation}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm lg:max-w-md relative z-10"
        >
          <img src="/ab3.svg" alt="Empowering Image" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
