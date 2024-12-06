import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import "animate.css";
import FormEl from "../../Shared/FormEl"; // Import the form component
import { Link } from "react-router-dom";
import './HomeHeroEl.css'; // Import custom CSS for animations

const HomeHeroEl = () => {
  const [changingText, setChangingText] = useState("");
  const [animation, setAnimation] = useState("animate__fadeInUp");
  const [isInitialModalVisible, setIsInitialModalVisible] = useState(false); // For the first "Book Now" popup
  const [isFormModalVisible, setIsFormModalVisible] = useState(false); // For the form modal

  const textOptions = [
    "Business Planning",
    "Performance Marketing",
    "Online Reputation Management (ORM)",
    "Search Engine Optimization (SEO)",
    "Branding & Community Building",
    "Website Design",
    "Sales Consulting",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate__fadeOutDown");

      setTimeout(() => {
        setChangingText((prev) => {
          const currentIndex = textOptions.indexOf(prev);
          return textOptions[(currentIndex + 1) % textOptions.length];
        });
        setAnimation("animate__fadeInUp");
      }, 500); // Delay to complete fade-out before changing text
    }, 2000); // Change text every 2 seconds

    const popupTimeout = setTimeout(() => {
      setIsInitialModalVisible(true); // Automatically open initial "Book Now" popup after 2 seconds
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(popupTimeout);
    };
  }, []);

  // Function to show form modal
  const handleShowFormModal = () => {
    setIsInitialModalVisible(false); // Close the initial popup
    setIsFormModalVisible(true); // Show the form modal
  };

  const handleCloseFormModal = () => {
    setIsFormModalVisible(false);
  };

  return (
    <div
      className="hero-section gradient-background md:p-10 p-3 md:py-20 py-10 flex flex-col items-center justify-center text-center"
      style={{ minHeight: "82vh",paddingTop:"120px" }}
    >
      <br></br>
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-black">
      Achieve 5x ROI with Data- Driven Business  Plans <br /><br></br>
      </h1>
      <h2 className="text-2xl mb-2 text-black">
        Looking to succeed in sales and marketing? We’ve<br /> got the complete kit.
      </h2>
      <b className="text-3xl font-semibold mb-4 text-black">
        <span className={`text-[#E6377A] animate__animated ${animation}`}>
          {changingText}
        </span>
      </b>
      <br />
      <Button
        type="primary"
        className="mb-6"
        size="large"
        style={{
          borderRadius: "25px",
          padding: "0 30px",
          border: "2px solid white",
          backgroundColor: "#E6377A",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        onClick={() => setIsInitialModalVisible(true)} // Opens the initial "Book Now" modal
      >
        Talk to our experts
      </Button>
      <div className="cards grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="card bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h4 className="text-3xl font-bold text-[#4C6DC7]">200+</h4>
          <p className="text-lg text-[#4C6DC7]">Satisfied customers</p>
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h4 className="text-3xl font-bold text-[#4C6DC7]">5x </h4>
          <p className="text-lg text-[#4C6DC7]">Return On Investment</p>
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h4 className="text-3xl font-bold text-[#4C6DC7]">4.6/5</h4>
          <p className="text-lg text-[#4C6DC7]">Ratings</p>
        </div>
      </div>

      {/* First Modal (Initial Popup with "Book Now" button) */}
      <Modal
        title={
          <div className="flex items-center">
            <SolutionOutlined
              style={{ color: "#2F3A56", marginRight: 8, fontSize: "24px", animation: "bounce 1s infinite" }}
            />
            <span className="text-2xl text-[#2F3A56] font-bold">
              Book Your Consultation
            </span>
          </div>
        }
        visible={isInitialModalVisible}
        onCancel={() => setIsInitialModalVisible(false)}
        footer={
          <Link to="https://calendly.com/salessyllabus" target="_blank" style={{ textDecoration: "none" }}>
            <Button
              key="bookNow"
              type="primary"
              style={{
                background: "linear-gradient(to right, #2F3A56, #5A6478)",
                color: "white",
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Book Now
            </Button>
          </Link>
        }
        centered
        bodyStyle={{
          fontSize: "16px",
          lineHeight: "1.6",
          background: "linear-gradient(135deg, #E0E5EC, #BDC5D1)",
          padding: "20px",
        }}
        style={{ borderRadius: "15px", background: "#F5F7FA" }}
        width={450}
      >
        <p className="text-gray-700 text-lg">
          Want to schedule a consultation with our experts? Click "Book Now" to get started!
        </p>
        <p className="text-gray-700 text-sm">
          Schedule a free 45 min strategic discussion with our experts.
        </p>
      </Modal>

      {/* Second Modal (Form Modal) */}
      <Modal
        title={
          <div className="flex items-center">
            <SolutionOutlined
              style={{ color: "#FF5733", marginRight: 8, fontSize: "24px", animation: "bounce 1s infinite" }}
            />
            <span className="text-2xl text-[#FF5733] font-bold">
              Book Consultation Now
            </span>
          </div>
        }
        visible={isFormModalVisible}
        onCancel={handleCloseFormModal}
        footer={null} // No default footer since form submission is handled inside the form
        centered
        bodyStyle={{
          fontSize: "16px",
          lineHeight: "1.6",
          background: "linear-gradient(135deg, #F6D365, #FDA085)",
          borderRadius: "15px",
        }}
        style={{ borderRadius: "15px", background: "#fff0f5" }}
        width={500}
      >
        <FormEl /> {/* Show the form here */}
      </Modal>
    </div>
  );
};

export default HomeHeroEl;
