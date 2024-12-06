import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  const [form] = Form.useForm();

  const sendEmail = (values) => {
    emailjs.send("service_evnh226", "template_43ycn0v", values, "aHWw0G5vVDW9ORqW2")
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        form.resetFields();
      }, (error) => {
        console.log('Email sending failed.', error.text);
      });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-blue-500 text-gray-800 py-10 flex items-center">
      {/* Background - New gradient and optional pattern */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/path-to-pattern-or-abstract-design.png)' }}></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white">
            Business Planning: <span className="text-yellow-300">Your Blueprint for Success</span>
          </h1>
          <p className="text-lg sm:text-2xl mb-6 text-gray-300">
            Empower your business with a clear path to growth. Our detailed business plans provide strategic direction, market analysis, and revenue projections for long-term success.
          </p>
          <Link to="/contact-us">
            <Button 
              type="primary" 
              shape="round" 
              size="large" 
              icon={<ArrowRightOutlined />} 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500 border-none text-white shadow-md transform hover:scale-105 transition-transform">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Right Side - Responsive Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm lg:max-w-md relative z-10">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">Book Appointment</h2>
          <Form 
            form={form}
            layout="vertical"
            onFinish={sendEmail}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input placeholder="Your Name" className="border-gray-300 focus:border-purple-500" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input type="email" placeholder="Your Email" className="border-gray-300 focus:border-purple-500" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}>
              <Input placeholder="Your Phone Number" className="border-gray-300 focus:border-purple-500" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}>
              <Input.TextArea placeholder="Your Message" rows={4} className="border-gray-300 focus:border-purple-500" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 border-none w-full text-white shadow-md transform hover:scale-105 transition-transform">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
