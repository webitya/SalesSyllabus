import React, { lazy, Suspense } from "react";
import { Row, Col, Card, Spin } from "antd";
import "tailwindcss/tailwind.css";

const ApexChart = lazy(() => import("react-apexcharts"));

const chartOptions = {
  chart: { type: "area", background: "transparent" },
  stroke: { curve: "smooth", width: 2 },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.8,
      opacityFrom: 0.3,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: { style: { colors: "#4A4A4A", fontSize: "12px" } },
  },
  yaxis: { labels: { style: { colors: "#4A4A4A", fontSize: "12px" } } },
  title: {
    text: "Growth Over Time",
    align: "center",
    style: { fontSize: "14px", color: "#4A4A4A", fontWeight: "bold" },
  },
  colors: ["#93c5fd", "#38bdf8"],
  tooltip: { theme: "light", x: { show: true } },
};

const chartSeries = [{ name: "Growth Potential", data: [10, 20, 30, 40, 50, 60, 70] }];

const AboutWhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 pt-20 via-blue-50 to-purple-50 py-10">
      <Row gutter={[16, 16]} className="mx-auto px-4 lg:px-10">
        {/* Content Column */}
        <Col xs={24} md={12}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            At Sales Syllabus, we specialize in creating business transformation frameworks that empower organizations
            to achieve sustainable growth and measurable success. With over seven years of dedicated experience, we
            have honed a proven system that aligns and optimizes your sales and marketing functions.
          </p>
        </Col>

        {/* Chart Column */}
        <Col xs={24} md={12}>
          <Card className="shadow-lg p-4">
            <Suspense fallback={<Spin size="small" />}>
              <ApexChart options={chartOptions} series={chartSeries} type="area" height={250} width="100%" />
            </Suspense>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default AboutWhoWeAre;
