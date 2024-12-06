// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// const HeaderGraph = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const chartOptions = {
//     chart: {
//       type: "pie",
//       background: "transparent",
//       dropShadow: {
//         enabled: true,
//         top: 10,
//         left: 10,
//         blur: 10,
//         opacity: 0.25,
//         color: "#000",
//       },
//       events: {
//         dataPointMouseEnter: (event, chartContext, config) => {
//           setActiveIndex(config.dataPointIndex);
//         },
//         dataPointMouseLeave: () => {
//           setActiveIndex(null);
//         },
//       },
//     },
//     labels: [
//       "Financial Performance and ROI",
//       "Customer Lifecycle Value",
//       "Conversion Rate and Lead Generation",
//       "Customer Acquisition Cost Less Then ",
//       "Business Growth",
//     ],
//     colors: [
//       "rgba(59, 130, 246, 1)", // Blue
//       "rgba(37, 99, 235, 1)", // Dark Blue
//       "rgba(251, 191, 36, 1)", // Yellow
//       "rgba(248, 113, 113, 1)", // Red
//       "rgba(34, 197, 94, 1)", // Green
//     ],
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "dark",
//         type: "diagonal1",
//         gradientToColors: [
//           "rgba(29, 78, 216, 1)", // Darker blue
//           "rgba(17, 63, 228, 1)", // Darker dark blue
//           "rgba(245, 158, 11, 1)", // Darker yellow
//           "rgba(244, 63, 63, 1)", // Darker red
//           "rgba(22, 163, 74, 1)", // Darker green
//         ],
//         stops: [0, 100],
//       },
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: "50%", // Add a "hole" for a donut look
//           labels: {
//             show: false,
//           },
//         },
//         expandOnClick: false,
//         dataLabels: {
//           offset: 0,
//           minAngleToShowLabel: 10,
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return `${val.toFixed(1)}%`;
//       },
//       style: {
//         fontSize: "14px",
//         fontWeight: "bold",
//         colors: ["#FFFFFF"],
//         textShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)", // Simulate depth
//       },
//     },
//     tooltip: {
//       theme: "dark",
//     },
//     legend: {
//       show: false, // Hides the legend
//     },
//     states: {
//       hover: {
//         filter: {
//           type: "lighten",
//           value: 0.15,
//         },
//       },
//       active: {
//         filter: {
//           type: "darken",
//           value: 0.25,
//         },
//       },
//     },
//   };

//   const chartData = [65, 27, 35, 15, 90];

//   const modifiedData = chartData.map((value, index) =>
//     activeIndex === null || activeIndex === index ? value : value * 0.8
//   );

//   return (
//     <div className="relative flex w-full flex-col items-center text-white pb-5 md:mt-0 rounded-lg">
      
//       <div className="w-full max-w-4xl">
//         <Chart options={chartOptions} series={modifiedData} type="donut" height="400" />
//       </div>
//     </div>
//   );
// };

// export default HeaderGraph;
import React, { useState } from "react";
import Chart from "react-apexcharts";

const HeaderGraph = () => {
  const [growthRate, setGrowthRate] = useState(15.5); // Example growth rate percentage

  const chartOptions = {
    chart: {
      type: "pie",
      background: "transparent",
      dropShadow: {
        enabled: true,
        top: 10,
        left: 10,
        blur: 10,
        opacity: 0.25,
        color: "#000",
      },
      events: {
        dataPointMouseEnter: (event, chartContext, config) => {
          setActiveIndex(config.dataPointIndex);
        },
        dataPointMouseLeave: () => {
          setActiveIndex(null);
        },
      },
    },
    labels: [
      `Financial Performance and ROI Increased by`,
      `Customer Lifecycle Value Increased by`,
      `Conversion Rate and Lead Generation Increased by`,
      `Customer acquisition cost under `,
      `Business Growth Increased by`,
    ],
    colors: [
      "rgba(59, 130, 246, 1)", // Blue
      "rgba(37, 99, 235, 1)", // Dark Blue
      "rgba(251, 191, 36, 1)", // Yellow
      "rgba(248, 113, 113, 1)", // Red
      "rgba(34, 197, 94, 1)", // Green
    ],
    plotOptions: {
      pie: {
        donut: {
          size: "50%", // Add a "hole" for a donut look
        },
        expandOnClick: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val.toFixed(1)}%`;
      },
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#FFFFFF"],
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false, // Hides the legend
    },
  };

  const chartData = [25.0, 11.6, 13.1, 12.0, 38.3];

  return (
    <div className="relative flex w-full flex-col items-center text-white pb-5 md:mt-0 rounded-lg">
      <div className="w-full max-w-4xl">
        <Chart options={chartOptions} series={chartData} type="donut" height="400" />
        <h2 className="text-center text-2xl font-bold text-white mt-4">
        ROI Analysis
        </h2>
      </div>
    </div>
  );
};

export default HeaderGraph;

