import { Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CaseStudiesEl.css'; // Ensure to import your CSS

const caseStudies = [
  {
    id: 1,
    title: "How we helped an IT company build a Product Sales team",
    description: "An in-depth look at how we helped an IT company set up their sales and marketing team to improve productivity.",
    link: "/case-study-1",
    img: "/1-mi.jpeg"
  },
  {
    id: 2,
    title: "How we assisted Top SAP and Oracle partners to generate leads",
    description: "Discover our approach to helping SAP and Oracle partners achieve their sales targets by generating quality leads.",
    link: "/case-study-2",
    img: "/2-mi.jpeg"
  },
  {
    id: 3,
    title: "How we reduced the bounce rate of Sales and marketing calls",
    description: "Learn how we improved communication and reduced bounce rates in telemarketing and inside sales for our client.",
    link: "/case-study-3",
    img: "/3-mi.jpeg"
  },
  {
    id: 4,
    title: "How we helped build a sales and marketing team",
    description: "Find out how we assisted organizations in building effective sales teams with structured hiring and performance management.",
    link: "/case-study-4",
    img: "/4-mi.jpeg"
  },
];

const cardAnimation = {
  y: [0, -10, 0], // Move up by 10px and back down
  transition: {
    duration: 2, // Smooth transition over 2 seconds
    ease: "easeInOut", // Smooth easing
    repeat: Infinity, // Infinite loop
    repeatType: "reverse" // Reverse after each loop
  }
};

export default function CaseStudiesEl() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen case-studies-container">
      <h1 className="text-center text-4xl font-bold mb-12">Case Studies</h1>

      <Row gutter={[16, 16]}>
        {caseStudies.map((caseStudy) => (
          <Col xs={24} sm={12} md={8} lg={6} key={caseStudy.id}>
            <motion.div
              animate={cardAnimation} // Applying the up-down animation to each card
              className="case-study-card-wrapper"
            >
              <Card
                hoverable
                className="case-study-card"
                cover={
                  <img
                    alt="case-study-thumbnail"
                    src={caseStudy.img}
                    className="case-study-image"
                  />
                }
              >
                <h3 className="case-study-title">{caseStudy.title}</h3>
                <p className="case-study-description">{caseStudy.description}</p>
                <Link to={caseStudy.link} target="_blank">
                  <Button type="primary" className="mt-4">
                    Read Now
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
