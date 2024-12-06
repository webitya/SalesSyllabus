import React, { useState } from 'react';
import { Modal, Input, Button, message } from 'antd';
import { MailOutlined, DownloadOutlined, SendOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import industries from './industryData';

const IndustryResourcesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleDownloadClick = (pdf) => {
    setSelectedPdf(pdf);
    setIsModalOpen(true);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleEmailSubmit = () => {
    if (isEmailValid && selectedPdf) {
      emailjs
        .send(
          'service_evnh226',
          'template_43ycn0v',
          { user_email: email, pdf_link: window.location.origin + selectedPdf },
          'aHWw0G5vVDW9ORqW2'
        )
        .then(() => {
          message.success("Email sent successfully!");

          handleDirectDownload();

          setIsModalOpen(false);
          setEmail('');
          setSelectedPdf(null);
        })
        .catch(() => {
          message.error("Failed to send email. Please try again.");
        });
    } else {
      message.error("Please enter a valid email.");
    }
  };

  const handleDirectDownload = () => {
    if (selectedPdf) {
      const link = document.createElement('a');
      link.href = selectedPdf;
      link.download = selectedPdf.split('/').pop();
      link.click();
      setIsModalOpen(false);
    }
  };

  return (
    <section className="py-8 px-4 lg:px-12 bg-white" id='resources'>
      <h2 className="text-2xl font-semibold text-center text-blue-900 mb-8">
        Industry-Specific Insights
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 border-r mb-6 lg:mb-0">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`block w-full text-left px-4 py-3 text-blue-700 font-semibold ${activeIndex === index ? "bg-blue-100" : "hover:bg-blue-50"}`}
            >
              {industry.industryName}
            </button>
          ))}
        </div>

        <div className="w-full lg:w-3/4 lg:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-4">Market Research</h3>
              {industries[activeIndex].marketResearch.map((item, idx) => (
                <div key={idx} className="mb-4">
                  <p className="text-gray-700 font-medium">{item.topic}</p>
                  <button onClick={() => handleDownloadClick(item.pdf)} className="text-blue-600 underline mt-1">
                    Download
                  </button>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-4">White Papers</h3>
              {industries[activeIndex].whitePapers.map((item, idx) => (
                <div key={idx} className="mb-4">
                  <p className="text-gray-700 font-medium">{item.topic}</p>
                  <button onClick={() => handleDownloadClick(item.pdf)} className="text-blue-600 underline mt-1">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Email Subscription */}
      <Modal visible={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} centered>
        <div className='flex justify-center'>
          <img src="/logob.svg" width="80px" alt="Logo" />
        </div>
        <h2 className="text-lg font-semibold text-center text-blue-900 mb-4">Subscribe to Download</h2>
        <Input
          size="large"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          prefix={<MailOutlined />}
          className="mb-4"
        />

        {/* Submit & Download Button */}
        <Button
          type="primary"
          onClick={handleEmailSubmit}
          disabled={!isEmailValid}
          className="w-full mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:from-orange-500 hover:to-pink-500"
          icon={<SendOutlined />}
        >
          Submit & Download
        </Button>

        {/* Direct Download Button */}
        <Button
          type="default"
          onClick={handleDirectDownload}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-blue-500 hover:to-green-500"
          icon={<DownloadOutlined />}
        >
          Direct Download
        </Button>
      </Modal>
    </section>
  );
};

export default IndustryResourcesSection;
