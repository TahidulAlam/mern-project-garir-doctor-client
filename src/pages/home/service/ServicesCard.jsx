/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const ServicesCard = ({ serviceData }) => {
  // console.log(serviceData);
  const { _id, description, facility, price, img, service_id, title } =
    serviceData || {};
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-sm h-[350px]">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl object-cover w-[100%] h-48"
          />
        </figure>
        <div className="card-body text-orange-400">
          <h2 className="card-title text-slate-900">{title}</h2>
          <div className="card-actions flex justify-between items-center">
            <p>Price: {price}$</p>
            <Link to={`/checkout/${_id}`}>
              <button className="">
                <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
