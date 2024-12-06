import React from "react";
import Chart from "react-apexcharts";

const BusinessStrategyGraph = () => {
  const chartOptions = {
    chart: {
      type: "line",
      height: 500, // Larger chart size for visibility
      background: "transparent",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1000, // Animation speed
      },
    },
    stroke: {
      curve: "smooth", // Smooth curves for the line chart
      width: 3, // Line thickness
    },
    fill: {
      type: "gradient", // Area fill with a gradient
      gradient: {
        shade: "light",
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    colors: [
      "#1D4ED8", // Blue for Market Analysis
      "#F59E0B", // Yellow for Strategic Planning
      "#10B981", // Green for Sales Performance
    ],
    xaxis: {
      categories: [
        "Market Analysis & Goal Setting",
        "Strategic Planning & Resource Development",
        "Sales Performance Management System",
      ], // Categories representing business strategies
      title: {
        text: "Business Strategy Areas",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#111827", // Dark color for readability
        },
      },
    },
    yaxis: {
      title: {
        text: "Progress (%)",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#111827", // Dark color for Y-axis title
        },
      },
      min: 0, // Minimum value for Y-axis
      max: 100, // Maximum value for Y-axis
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#FFFFFF"], // White text for contrast on lines
      },
      formatter: function (val) {
        return `${val.toFixed(1)}%`; // Display percentage value on data points
      },
    },
    tooltip: {
      theme: "dark", // Tooltip theme
    },
    legend: {
      show: false, // Hide the legend for a cleaner design
    },
  };

  // Data representing the progress in percentage for each strategy area
  const chartData = [
    [70, 80, 90], // Data for Market Analysis
    [85, 90, 95], // Data for Strategic Planning
    [90, 95, 100], // Data for Sales Performance
  ];

  return (
    <div className="relative flex flex-col items-center text-white bg-white p-6 rounded-lg shadow-xl w-full">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Business Strategy Overview</h2>
      <div className="w-full max-w-6xl">
        <Chart options={chartOptions} series={[{ data: chartData[0] }, { data: chartData[1] }, { data: chartData[2] }]} type="line" height="500" />
      </div>
      <p className="text-sm text-gray-600 mt-4">
        This line and area chart illustrates the progress across three core areas of business strategy over time.
      </p>
    </div>
  );
};

export default BusinessStrategyGraph;
