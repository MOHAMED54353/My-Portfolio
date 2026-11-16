import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Default = () => {
  return (
    <>
      <div style={{ minHeight: "100vh", flexDirection: "column" }}>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Default;
