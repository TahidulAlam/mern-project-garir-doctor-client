/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/garirDoctor?.png";
import useAuth from "../../../hooks/useAuth";

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInOut } = useAuth();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navLink = (
    <>
      <li>
        <NavLink to={"/"} className="text-black">
          home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="text-black">
          about
        </NavLink>
      </li>
      <li>
        <NavLink to={"/services"} className="text-black">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className="text-black">
          Contact
        </NavLink>
      </li>
      <li>
        {user?.email ? (
          <NavLink to={"/bookings"} className="text-black">
            My Bookings
          </NavLink>
        ) : (
          ""
        )}
      </li>
      <li>
        {user?.email ? (
          <button
            className="border-[#FF3811] rounded-md bg-white text-[#FF3811] btn-outline border-2"
            onClick={signInOut}
          >
            Log out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="border-[#FF3811] rounded-md bg-white text-[#FF3811] btn-outline border-2"
          >
            Appoinment
          </Link>
        )}
      </li>
    </>
  );
  return (
    <nav className=" p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-semibold">
              <img src={logo} alt="Logo" className="w-20 h-12" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}
          >
            <ul className="md:flex space-x-4">{navLink}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
