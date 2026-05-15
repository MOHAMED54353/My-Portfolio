import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";

const Default = () => {
  return (
    <>
      <div style={{ minHeight: "100vh", flexDirection: "column" }}>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Default;
