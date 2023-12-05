/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { isValidEmail } from "../../components/validation/Validation";
import SocialAuth from "../../components/socialAuth/SocialAuth";
import toast from "react-hot-toast";
import bannerImg from "../../../public/garirDoctor?.png";
import useAxiosUrl from "../../hooks/useAxiosUrl";
const Login = () => {
  const { signIn } = useAuth();
  const axiosUrl = useAxiosUrl();
  // const location = useLocation();
  // const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // if (isValidEmail(email)) {
    // signIn(email, password)
    //   .then((result) => {
    //     const loggedInUser = result.user;
    //     const user = { email };
    //     axios
    //       .post("http://localhost:5000/jwt", user)
    //       .then((res) => console.log(res.data))
    //       .catch((err) => console.error(err));
    //     toast("Sign In seccessfully");
    //     navigate(location.state ? location.state : "/");
    //   })
    //   .catch((err) => toast("invalid input", err));
    // } else {
    //   return toast("invalid input");
    // }
    // adm1n@Gmail.com
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        console.log(user);
        const url = "/jwt";
        axiosUrl.post(url).then((res) => console.log(res.data));
        toast("Sign In seccessfully");
        // navigate(location.state ? location.state : "/");
      })
      .catch(() => toast("invalid input"));
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
              <form className="w-full flex-1 mt-8" onSubmit={handleSignIn}>
                <div className="mx-auto max-w-xs">
                  <div>
                    <level>
                      <span>Email:</span>
                    </level>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div className="mt-5">
                    <level>
                      <span>Password:</span>
                    </level>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <button className="tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mt-5">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Not have an Account. plz
                    <Link
                      to={"/registration"}
                      className="border-b border-gray-500 text-orange-400 font-semibold border-dotted px-2"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="my-5 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or Sign up with e-mail
                  </div>
                </div>
                <SocialAuth></SocialAuth>
              </form>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            {/* <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                "background-image":
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            >
            </div> */}
            <div className="flex justify-center items-center w-full">
              <img className="w-3/5" src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
