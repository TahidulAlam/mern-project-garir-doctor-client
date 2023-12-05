/* eslint-disable no-unused-vars */
import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdAddCall, MdAddLocationAlt } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <div className="bg-gray-900 grid grid-cols-3 text-white text-lg p-16 py-24">
        <div className="flex justify-start items-center gap-5">
          <div className="text-4xl">
            <SlCalender />
          </div>
          <div>
            <h1>We are open monday-friday</h1>
            <h1>7:00 am - 9:00 pm</h1>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <div className="text-4xl">
            <MdAddCall />
          </div>
          <div>
            <h1>Have a question?</h1>
            <h1>+2546 251 2658</h1>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <div className="text-4xl">
            <MdAddLocationAlt />
          </div>
          <div>
            <h1>Need a repair? our address</h1>
            <h1>Liza Street, New York</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
