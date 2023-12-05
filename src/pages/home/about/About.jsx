/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <div className="relative">
            <img
              src={img}
              className="w-[460px] h-[473px] object-cover object-left rounded-lg"
              alt=""
            />
            <div className="absolute -bottom-16 -right-0">
              <img
                src={img2}
                className=" h-[332px] w-[327px] object-cover rounded-md border-8 border-white"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h1>About Us</h1>
            <h1 className="text-5xl text-start flex flex-col justify-start font-bold">
              <span>We are qualified</span> <span>& of experience</span>{" "}
              <span>in this field</span>
            </h1>
            <h1 className="text-base mt-6 text-slate-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </h1>
            <h1 className="text-base mt-6 text-slate-400">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </h1>
            <div className="mt-6">
              <button className="btn btn-md bg-[#FF3811] rounded-md text-white hover:text-[#FF3811] hover:border-[#FF3811]">
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
