/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/shared/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-[1130px] mx-auto bg-slate-50 flex flex-col min-h-screen">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
        <div className="mt-auto">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
