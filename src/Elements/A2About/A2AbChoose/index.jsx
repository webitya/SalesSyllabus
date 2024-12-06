import React from 'react';
import { Carousel, Card } from 'antd';
import {
  DatabaseOutlined,
  TeamOutlined,
  LineChartOutlined,
  SolutionOutlined,
  CustomerServiceOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const reasons = [
  {
    icon: <DatabaseOutlined className="text-4xl text-purple-500" />,
    title: 'Data-Driven Approach',
    description:
      'We leverage data to create strategies that are effective, measurable, and aligned with your business goals.',
  },
  {
    icon: <TeamOutlined className="text-4xl text-blue-500" />,
    title: 'Expert Team',
    description:
      'Our team of experienced professionals brings deep expertise in sales and digital marketing.',
  },
  {
    icon: <LineChartOutlined className="text-4xl text-green-500" />,
    title: 'Proven Results',
    description: 'We have a track record of delivering tangible outcomes that drive growth.',
  },
  {
    icon: <SolutionOutlined className="text-4xl text-orange-500" />,
    title: 'Tailored Strategies',
    description: 'Our solutions are customized to fit the unique needs of your business.',
  },
  {
    icon: <CustomerServiceOutlined className="text-4xl text-red-500" />,
    title: 'Client-Centric Approach',
    description:
      'We prioritize transparency, communication, and a collaborative relationship.',
  },
];

// Custom Arrow Components
const NextArrow = () => (
  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
    <RightOutlined style={{ fontSize: '20px' }} />
  </button>
);

const PrevArrow = () => (
  <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700">
    <LeftOutlined style={{ fontSize: '20px' }} />
  </button>
);

const AboutWhyChooseUs= () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          With a commitment to excellence and a focus on achieving superior results, we pride
          ourselves on delivering premium services tailored to your specific needs.
        </p>

        {/* Carousel with Autoplay */}
        <div className="relative">
          <Carousel
            arrows
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={2000} // Autoslide every 2 seconds
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 576, settings: { slidesToShow: 1 } },
            ]}
          >
            {reasons.map((reason, index) => (
              <div key={index} className="px-4">
                <Card
                  className="shadow-lg hover:shadow-2xl transition-all duration-300 border-none"
                  hoverable
                  style={{ minHeight: '300px' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">{reason.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
