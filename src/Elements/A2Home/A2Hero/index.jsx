// import { Button } from 'antd';
// import { Link as ScrollLink } from 'react-scroll';
// import { RocketOutlined } from '@ant-design/icons';
// import A2HeaderGraph from '../A2HeaderGraph';

// const HeroSectionA2 = () => {
//   return (
//     <div
//       className="hero-section flex flex-col lg:flex-row items-center justify-between min-h-[80vh] md:min-h-[74vh] md:max-h-[75vh]  px-6 md:py-16 py-5 lg:py-16 space-y-1 lg:space-y-0"
//       style={{ backgroundColor: "#0D577E"}}
//     >
//       {/* Left Side - Text Content */}
//       <div className="text-content flex flex-col justify-center items-start space-y-6 lg:space-y-8 w-full lg:w-1/2 pr-6">
//         {/* Heading */}
//         <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide text-white">
//           Driving Growth, Building Brands, Empowering Sales
//         </h1>

//         {/* Subheading */}
//         <p className="text-base md:text-lg lg:text-2xl font-medium opacity-90 text-white">
//           Transforming Business Potential with Data-Driven Sales & Marketing Solutions
//         </p>

//         {/* Call to Action Button */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 lg:mt-6">
//           <ScrollLink to="info" smooth={true} duration={500} offset={-70}>
//             <Button
//               type="default"
//               icon={<RocketOutlined style={{ fontSize: "20px" }} />}
//               className="
//                 text-base md:text-lg text-white transition duration-300 ease-in-out 
//                 px-4 !py-5 md:px-4 md:py-2 rounded-full shadow-lg w-full sm:w-auto 
//                 flex items-center justify-center gap-2 border-0
//               "
//               style={{
//                 background: "linear-gradient(135deg, #FBBE9D 0%, #FF758C 100%)",
//                 color: "#FFFFFF",
//                 fontWeight: 600,
//                 letterSpacing: "0.5px",
//                 boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
//               }}
//             >
//               Start Your Business Transformation
//             </Button>
//           </ScrollLink>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="image-content flex justify-center items-center w-full lg:w-1/2 lg:pl-6">
//         {/* <img
//           src="/hero1.png" // Replace with your actual image path
//           alt="Sales & Marketing Transformation"
//           className="
//             rounded-xl md:mt-20 transition-transform duration-300 hover:scale-105 object-contain
//           " 
//           style={{width:"460px"}}
//         /> */}
//         <A2HeaderGraph />
//       </div>
//     </div>
//   );
// };

// export default HeroSectionA2;

import { Button } from 'antd';
import { Link as ScrollLink } from 'react-scroll';
import { RocketOutlined } from '@ant-design/icons';
import A2HeaderGraph from '../A2HeaderGraph';
import Chart from 'react-apexcharts';
const chartOptions = {
  chart: {
    type: 'area',
    height: '100%',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  xaxis: {
    categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    labels: {
      style: {
        colors: '#6A5ACD',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6A5ACD',
      },
    },
  },
  series: [
    {
      name: 'Revenue Growth',
      data: [30, 50, 45, 60, 55, 70, 85],
    },
  ],
  colors: ['#7B68EE'],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      gradientToColors: ['#4B0082'],
      opacityFrom: 0.7,
      opacityTo: 0.1,
    },
  },
  grid: {
    borderColor: '#D3D3D3',
  },
  tooltip: {
    theme: 'dark',
  },
};
const HeroSectionA2 = () => {
  return (
    <div
      className="hero-section flex flex-col lg:flex-row items-center justify-between min-h-[80vh] md:min-h-[74vh] md:max-h-[75vh] md:px-6 md:py-16 py-5 lg:py-16 space-y-1 lg:space-y-0"
      style={{ backgroundColor: "#1E293B" }}
    >
      {/* Left Side - Text Content */}
      <div className="text-content flex flex-col justify-center items-start px-5 space-y-6 lg:space-y-8 w-full lg:w-1/2 pr-4">
        {/* Heading */}
        <h1
          className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide opacity-95 text-white transition-transform duration-300"
          style={{ animation: "fadeIn 1.2s ease-in-out" }}
        >
          Driving Growth, Building Brands, Empowering Sales
        </h1>

        {/* Subheading */}
        <p
          className="text-base md:text-lg lg:text-2xl font-medium opacity-95 text-white"
          style={{ animation: "fadeIn 1.5s ease-in-out" }}
        >
          We deliver measurable outcomes through  market analysis, sales optimization ,and  strategic consulting
        </p>

        {/* Call to Action Button */}
        <div className="sm:gap-6 mt-4 lg:mt-6 m-5 md:block hidden">
          <ScrollLink to="info" smooth={true} duration={500} offset={-70}>
            <Button
              type="default"
              icon={<RocketOutlined style={{ fontSize: "20px" }} />}
              className="
                text-base md:text-lg text-white transition duration-300 ease-in-out 
                px-4 !py-5 md:px-4 md:py-2 rounded-full shadow-lg w-full sm:w-auto 
                flex items-center justify-center gap-2 border-0 hover:scale-105 
                focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
              "
              style={{
                background: "linear-gradient(135deg, #007BFF 0%, #007BFF 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                letterSpacing: "0.5px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                border:"1px solid white"
              }}
              aria-label="Start Your Business Transformation"
            >
              Start Your Business Transformation
            </Button>
          </ScrollLink>
        </div>
      </div>

      {/* Right Side - Image/Graph Content */}
      <div
        className="image-content flex md:px-16 md:mt-0 mt-5 !p-2 justify-center items-center w-full lg:w-1/2 lg:pl-6"
        style={{ animation: "slideInFromRight 1.2s ease-in-out" }}
      >
       <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col justify-between h-96 w-full mx-auto">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Revenue Growth Analysis</h2>
          <p className="text-sm text-gray-600 mb-4">
            Track your revenue growth and identify trends to guide strategic decisions.
          </p>
          <div className="flex-grow">
            <Chart options={chartOptions} series={chartOptions.series} type="area" height="100%" />
          </div>
        </div>
        {/* <A2HeaderGraph /> */}
      </div>
      {/*  */}
      <div className="md:hidden block">
          <ScrollLink to="info" smooth={true} duration={500} offset={-70}>
            <Button
              type="default"
              icon={<RocketOutlined style={{ fontSize: "20px" }} />}
              className="
                text-base md:text-lg text-white transition duration-300 ease-in-out 
                px-4 !py-5 md:px-4 md:py-2 rounded-full shadow-lg w-full sm:w-auto 
                flex items-center md:m-0 !my-4 justify-center gap-2 border-0 hover:scale-105 
                focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
              "
              style={{
                background: "linear-gradient(135deg, #007BFF 0%, #007BFF 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                letterSpacing: "0.5px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                border:"1px solid white"
              }}
              aria-label="Start Your Business Transformation"
            >
              Start Your Business Transformation
            </Button>
          </ScrollLink>
        </div>
      {/*  */}
    </div>
  );
};

export default HeroSectionA2;

