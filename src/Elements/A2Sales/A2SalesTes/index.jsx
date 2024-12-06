import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const testimonials = [
  {
    name: "Leading Oracle Partner",
    position: "Sales Team",
    feedback: "Sales Syllabus created an effective sales and marketing process for us and supported us in developing a content marketing plan to establish our brand as an experienced and trusted leader in our industry.",
  },
  {
    name: "Leading SAP Partner",
    position: "Marketing Manager",
    feedback: "The Sales Syllabus team helped us set up a comprehensive lead generation process—from hiring and training to making resources effective for consistent lead generation.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-white md:pt-20 py-5 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-gray-50">
              <div className="flex justify-center mb-4">
                <UserOutlined style={{ fontSize: '2.5rem', color: '#1890ff' }} />
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
