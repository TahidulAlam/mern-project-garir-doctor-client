/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/garirDoctor?.png";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const { user, signInOut } = useAuth();
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
          <NavLink to={"/cart"} className="text-black">
            My Cart
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
    <div>
      <div className="navbar z-50 text-black">
        <div className="navbar w-[25%] flex-row lg:justify-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[120] p-2  rounded-box w-[250px] bg-white"
            >
              {navLink}
            </ul>
          </div>
          <div>
            <Link className="flex gap-3 items-center justify-center" to="/">
              <img src={logo} style={{ width: "80px" }} alt="" />
              <a className="normal-case text-2xl font-poppins hidden lg:block font-semibold text-black backdrop-filter">
                Garir Doctor
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar w-[75%] flex-row lg:justify-end justify-between">
          <ul className="menu menu-horizontal hidden lg:flex px-1 justify-around gap-2">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
