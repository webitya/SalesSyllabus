import React from "react";
import { Card, Typography, List, Row, Col } from "antd";
import { SolutionOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SalesSyllabusComponent = () => {
  const outputItems = [
    "Independently overcomes challenges and boosts sales and marketing team productivity by up to 50%.",
    "Continuously enhances performance by targeting high-value customer segments.",
    "Implement workflows, KRAs, KPIs, reporting systems, and research to achieve business transformation.",
    "Delivers a precise, actionable roadmap to address sales and marketing challenges, reducing problem-solving time by 90%.",
    "Create a targeted action plan to address sales and marketing problems with high accuracy",
  ];

  const problemItems = [
    "Lack of continuous gap identification and resolution.",
    "Absence of standardized frameworks in sales and marketing.",
    "People dependency leading to inconsistent workflows and poor synergy.",
  ];

  return (
    <div style={{ background: "#f5f5f5", }}>
      <Card
        style={{
          padding: "5px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
        bordered={false}
      >
        <Row gutter={[24, 24]}>
          {/* Output Section */}
          <Col xs={24} md={12}>
            <Card
              title={
                <Title level={4} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <SolutionOutlined style={{ color: "#1890ff" }} />
                  Output
                </Title>
              }
              bordered={false}
              style={{ background: "#f0f9ff" }}
            >
              <Text style={{ color: "#555" }}>
                Sales Syllabus Pro enables businesses to identify, monitor, and address growth barriers with precision. It uncovers actionable insights, empowering teams to:
              </Text>
              <List
                dataSource={outputItems}
                renderItem={(item) => (
                  <List.Item style={{ padding: "8px 0" }}>
                    <Text style={{ color: "#333" }}>• {item}</Text>
                  </List.Item>
                )}
                style={{ marginTop: "16px" }}
              />
            </Card>
          </Col>

          {/* Key Problems Addressed Section */}
          <Col xs={24} md={12}>
            <Card
              title={
                <Title level={4} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
                  Key Problems Addressed
                </Title>
              }
              bordered={false}
              style={{ background: "#fff1f0" }}
            >
              <List
                dataSource={problemItems}
                renderItem={(item) => (
                  <List.Item style={{ padding: "8px 0" }}>
                    <Text style={{ color: "#333" }}>• {item}</Text>
                  </List.Item>
                )}
                style={{ marginTop: "16px" }}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SalesSyllabusComponent;
