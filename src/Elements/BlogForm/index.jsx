import React, { useState } from 'react';
import { Button,  Input, Form, notification, Typography } from 'antd';

import emailjs from 'emailjs-com';
import { useParams } from 'react-router-dom';


const { Title} = Typography;

const BlogPageEl = () => {
  const { id } = useParams(); // Assume blog post ID is passed as a URL parameter
  const [loading, setLoading] = useState(false);

  const handleCommentSubmit = (values) => {
    setLoading(true);
    emailjs.send("service_evnh226", "template_43ycn0v", values, "aHWw0G5vVDW9ORqW2")
      .then((response) => {
        console.log('Success:', response);
        notification.success({
          message: 'Success',
          description: 'Your comment has been submitted!',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        notification.error({
          message: 'Error',
          description: 'There was an error submitting your comment. Please try again.',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      {/* Comment Section */}
      <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <Title level={2} className="text-3xl font-semibold text-gray-900">Comments</Title>
        <Form name="comment_form" onFinish={handleCommentSubmit} layout="vertical">
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter your full name!' }]}
          >
            <Input placeholder="Your Full Name" className="border-gray-300 rounded-md" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input placeholder="Your Email" className="border-gray-300 rounded-md" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your comment!' }]}
          >
            <Input.TextArea rows={4} placeholder="Your Comment" className="border-gray-300 rounded-md" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="bg-blue-600 hover:bg-blue-700">
              Submit Comment
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default BlogPageEl;
