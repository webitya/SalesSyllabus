import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide strategic consulting services aimed at transforming business performance. Our focus is on enhancing three core pillars of your organization: business planning, marketing execution, and sales execution. Explore our individual service pages to learn more about how we drive impactful transformation"
    },
    {
      question: "How do I get started?",
      answer: "Get started by booking a free data analysis session with us. During this session, we’ll use data science to analyze key performance indicators, identify areas for improvement, and uncover opportunities for business transformation"
    },
    {
      question: "What makes your process different?",
      answer: (
        <>
          We build the foundation for an organization's sales and marketing success, guiding them from business planning to final sales closures. Our comprehensive services empower businesses to create impactful marketing strategies that enhance sales performance. What sets us apart is our unique ability to deliver integrated marketing and sales solutions, helping companies seamlessly achieve their growth goals.
          <br />
          <br />
          <strong>Historical Data Expertise:</strong> With over seven years of experience, we have worked with 100+ organizations and analyzed 400+ businesses through a data-driven lens. This extensive expertise provides us with unique insights into success and failure patterns across industries, enabling us to guide our clients toward business transformation with unmatched accuracy.
        </>
      ),
    },
    
    {
      question: "Can I integrate your services with our existing systems?",
      answer: "Yes, our services are designed to integrate seamlessly with your existing systems. We offer flexible solutions that can be customized to fit your specific needs and ensure smooth integration."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide assistance through our dedicated support desk"
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" style={{ width: '100%', padding: '50px 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ width: '100%', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
            onClick={() => toggleOpen(index)}
          >
            <h3 style={{ fontSize: '18px', margin: 0 }}>{faq.question}</h3>
            <div style={{ fontSize: '18px' }}>
              {openIndex === index ? <MinusOutlined /> : <PlusOutlined />}
            </div>
          </div>
          {openIndex === index && (
            <div style={{ marginTop: '10px', fontSize: '16px' }}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeFAQSection;
