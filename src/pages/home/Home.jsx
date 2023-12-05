/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./hero-banner/Banner";
import banner from "../../assets/images/banner/1.jpg";
import About from "./about/About";
import Services from "./service/Services";
import Contact from "./contact/Contact";
import Products from "./products/Products";

const Home = () => {
  return (
    <div>
      <div className="relative flex lg:justify-start justify-center items-center">
        <Banner></Banner>
        <div className="hero-overlay w-full absolute h-100% rounded-lg z-20"></div>
        <div className="absolute z-30 lg:left-20 left-0 ">
          <div className=" flex gap-5 flex-col lg:justify-start justify-center lg:items-start items-center">
            <h1 className="font-bold font-Inter lg:text-7xl text-2xl text-white lg:text-start text-center lg:flex-col flex">
              <span>Affordable</span> <span>Price For Car </span>
              <span>Servicing</span>
            </h1>
            <h1 className="lg:text-start text-white text-sm mx-14 lg:mx-0 lg:flex-col text-center">
              <span>
                There are many variations of passages of available, but the
              </span>
              <span>majority have suffered alteration in some form</span>
            </h1>
            <div className="flex gap-5">
              <button className="btn btn-md bg-[#FF3811] text-white hover:text-[#FF3811] border-transparent">
                {" "}
                Discover More
              </button>
              <button className="btn btn-md btn-outline border-[#FF3811] text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <About></About>
      </div>
      <div className="mt-20">
        <Services></Services>
      </div>
      <div className="mt-20">
        <Contact></Contact>
      </div>
      <div className="mt-20">
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
