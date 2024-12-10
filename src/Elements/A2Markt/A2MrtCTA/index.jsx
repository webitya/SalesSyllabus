import { SolutionOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const PremiumContentAdvantageSection = () => {
  return (
    <section className="bg-blue-900 py-20 px-6 md:px-20 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">
        Experience the Premium Content Advantage with Sales Syllabus
      </h2>
      <p className="text-lg mb-12 max-w-3xl mx-auto">
        Our content marketing isn’t just a service—it’s a partnership to elevate your brand to premium status. With a strategic content-first approach, we build authority and customer loyalty, pairing it with performance marketing and reputation management for sustainable growth and success.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg inline-block text-blue-900 max-w-2xl mx-auto">
        <SolutionOutlined className="text-4xl mb-4" />
        <h3 className="text-2xl font-semibold mb-4">Book a Consultation with Sales Syllabus</h3>
        <p className="text-gray-700 mb-6">
          Discover how a content-first approach can transform your brand’s visibility, authority, and engagement. Connect with us today to explore how we can help drive your brand's growth.
        </p>
        <Link to="https://calendly.com/salessyllabus">
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">
          Schedule a Consultation
        </button></Link>
      </div>
    </section>
  );
};

export default PremiumContentAdvantageSection;
