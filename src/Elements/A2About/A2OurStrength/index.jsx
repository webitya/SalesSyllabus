import React from 'react';
import { Row, Col, Card } from 'antd';
import 'tailwindcss/tailwind.css';

const A2OurStrengths = () => {
  const data = [
    {
      title: "What Sets Us Apart",
      points: [
        "Proven Expertise: Our frameworks have been tested and refined across industries, with measurable results in over 100+ implementations.",
        "Precision-Driven Systems: We don’t just optimize processes; we create alignment that drives results at every level.",
        "Tailored Solutions: Every strategy we develop is customized to meet the unique needs and goals of your organization.",
      ],
    },
    {
      title: "Our Success Stories",
      points: [
        "Enhanced revenue growth through strategic alignment.",
        "Improved efficiency in sales and marketing functions.",
        "A culture of continuous improvement fueled by data and innovation.",
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-blue-50 py-5 pb-10 font-premium">
      <div className="mx-auto px-5">
        <Row gutter={[24, 24]}>
          {data.map((item, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card
                className="h-full flex flex-col justify-between"
                bordered={false}
                bodyStyle={{ padding: '24px', height: '100%' }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default A2OurStrengths;
