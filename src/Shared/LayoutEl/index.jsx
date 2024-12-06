
// import React from "react";
// import FooterEl from "../FooterEl";
// import NavbarEl3 from "../Navbar3";
// import { Link } from "react-router-dom";
// import { DownloadOutlined } from "@ant-design/icons";

// const LayoutEl = (data) => {
//   const display = (
//     <>
//       <NavbarEl3 />
//       <div style={{ paddingTop: "70px" }}></div>
//       {data.children}
//       {/* <FooterEl /> */}

//       {/* Download Resources Button on the Right */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           zIndex: 1000,
//         }}
//       >
//         <Link
//           to="/free-resources"
//           style={{
//             backgroundColor: "#007BFF",
//             color: "white",
//             borderRadius: "30px",
//             padding: "10px 15px",
//             fontSize: "14px",
//             display: "flex",
//             alignItems: "center",
//             gap: "6px",
//             boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
//             transition: "transform 0.2s ease-in-out",
//           }}
//           className="hover:scale-105"
//         >
//           <DownloadOutlined style={{ fontSize: "16px" }} />
//           Free Resources
//         </Link>
//       </div>
//       {/* ==================== */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           zIndex: 1000,
//         }}
//       >
//         <Link
//           style={{
//             backgroundColor: "#007BFF",
//             color: "white",
//             borderRadius: "30px",
//             padding: "10px 15px",
//             fontSize: "14px",
//             display: "flex",
//             alignItems: "center",
//             gap: "6px",
//             boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
//             transition: "transform 0.2s ease-in-out",
//           }}
//           className="hover:scale-105"
//         >
//           <DownloadOutlined style={{ fontSize: "16px" }} />
//           Key Deliverables
//         </Link>
//       </div>
//     </>
//   );

//   return display;
// };

// export default LayoutEl;

import React, { useState } from "react";
import FooterEl from "../FooterEl";
import NavbarEl3 from "../Navbar3";
import { Link } from "react-router-dom";
import { DownloadOutlined, FileTextOutlined } from "@ant-design/icons";
import KeyDeliverableEl from "../KeyDelicerables"; // Import the modal content

const LayoutEl = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const display = (
    <>
      <NavbarEl3 />
      <div style={{ paddingTop: "70px" }}></div>
      {data.children}
      {/* <FooterEl /> */}

      {/* Free Resources Button */}
      <div className=""
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <Link
          to="/free-resources"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            borderRadius: "30px",
            padding: "10px 15px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease-in-out",
          }}
          className="hover:scale-105"
        >
          <DownloadOutlined style={{ fontSize: "16px" }} />
          Free Resources
        </Link>

        {/* Key Deliverables Button */}
        <button
  onClick={openModal}
  style={{
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "30px",
    padding: "10px 15px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
  }}
  className="hover:scale-105"
>
  <FileTextOutlined style={{ fontSize: "16px" }} />
  Key Deliverables
</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
        >
          <div className="md:w-[50%] w-[90%] max-h-screen no-scrollbar"
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              position: "relative",
              overflowY:"scroll"
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            {/* Modal Content */}
            <KeyDeliverableEl />
          </div>
        </div>
      )}
    </>
  );

  return display;
};

export default LayoutEl;




