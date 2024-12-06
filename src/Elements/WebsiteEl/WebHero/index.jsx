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
    <section className="relative bg-gradient-to-r from-indigo-100 via-blue-100 to-teal-100 text-gray-900 h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-indigo-900">
          Crafting Impactful Websites for Business Growth and Strategic Success
          </h1>
          <p className="text-lg sm:text-2xl mb-6 text-gray-700">
          We, at Sales Syllabus, specialize in high-quality web design services to boost your business visibility.
          </p>
          <Link to="/contact-us">
            <Button 
              type="primary" 
              shape="round" 
              size="large" 
              icon={<ArrowRightOutlined />} 
              className="bg-gradient-to-r from-green-400 to-teal-600 border-none text-white">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Right Side - Responsive Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm lg:max-w-md relative z-10">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Book Appointment</h2>
          <Form 
            form={form}
            layout="vertical"
            onFinish={sendEmail}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input type="email" placeholder="Your Email" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}>
              <Input placeholder="Your Phone Number" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}>
              <Input.TextArea placeholder="Your Message" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="bg-gradient-to-r from-green-400 to-teal-600 border-none w-full">
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
