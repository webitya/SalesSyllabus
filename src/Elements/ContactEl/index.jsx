import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Typography, notification } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included

const { Title, Paragraph } = Typography;

const ContactUsEl = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (values) => {
    setLoading(true);
    emailjs.send('service_evnh226', 'template_43ycn0v', values, 'aHWw0G5vVDW9ORqW2')
      .then((response) => {
        console.log('Success:', response);
        notification.success({
          message: 'Success',
          description: 'Your message has been sent successfully!',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        notification.error({
          message: 'Error',
          description: 'There was an error sending your message. Please try again.',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-2 bg-gradient-to-r from-indigo-50 to-blue-50 min-h-screen">
      {/* Contact Information Section */}
      <section className="mb-12 max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <Title level={1} className="text-center mb-6 text-blue-800">Contact Us</Title>
        <Paragraph className="text-center text-gray-700 mb-8">
          We’re here to assist you! Reach out via phone, email, or visit our office. We're excited to hear from you!
        </Paragraph>
        
        <Row gutter={16} justify="center">
          <Col xs={24} sm={12} md={8} lg={6} className="mb-8">
            <Card bordered={false} className="shadow-lg rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 p-4 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <PhoneOutlined className="text-blue-600 text-4xl mr-4" />
                <div>
                  <Title level={4} className="text-blue-900 mb-1">Phone</Title>
                  <Paragraph className="text-gray-600 text-sm">+91 6200207379</Paragraph>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="mb-8">
            <Card bordered={false} className="shadow-lg rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 p-1 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <MailOutlined className="text-blue-600 text-4xl mr-4" />
                <div>
                  <Title level={4} className="text-blue-900 mb-1">Email</Title>
                  <Paragraph className="text-gray-600 text-sm">sandeep@salessyllabus.com</Paragraph>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="mb-8">
            <Card bordered={false} className="shadow-lg rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 p-4 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <EnvironmentOutlined className="text-blue-600 text-4xl mr-4" />
                <div>
                  <Title level={4} className="text-blue-900 mb-1">Address</Title>
                  <Paragraph className="text-gray-600 text-sm">D block, Jayshree Green City, Argora, Ranchi</Paragraph>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Google Map Section */}
      <section className="mb-12 max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <Title level={2} className="text-center mb-6 text-blue-800">Find Us</Title>
        <div className="h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1193036294476!2d85.2905526746679!3d23.347691904118623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e167b82e1d37%3A0x6a8cf10389b05501!2sD%20block%20Jaishree%20Green%20City!5e0!3m2!1sbn!2sin!4v1726451576856!5m2!1sbn!2sin"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <Title level={2} className="text-center mb-6 text-blue-800">Send Us a Message</Title>
        <Form
          layout="vertical"
          name="contact_form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          className="space-y-6"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input placeholder="Your Full Name" className="border-gray-300 rounded-lg shadow-sm" />
          </Form.Item>

          <Form.Item
            label="Company Name"
            name="companyName"
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input placeholder="Your Company Name" className="border-gray-300 rounded-lg shadow-sm" />
          </Form.Item>

          <Form.Item
            label="Total Employees"
            name="totalEmployees"
            rules={[{ required: true, message: 'Please input the total number of employees!' }]}
          >
            <Input placeholder="Total Number of Employees" type="number" className="border-gray-300 rounded-lg shadow-sm" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Your Phone Number" className="border-gray-300 rounded-lg shadow-sm" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
          >
            <Input type="email" placeholder="Your Email" className="border-gray-300 rounded-lg shadow-sm" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" className="border-gray-300 rounded-lg shadow-sm" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default ContactUsEl;
