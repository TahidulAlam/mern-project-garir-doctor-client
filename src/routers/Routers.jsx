/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Services from "../pages/home/service/Services";
import Checkout from "../pages/home/checkout/Checkout";
import Bookings from "../pages/home/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/home/about/About";
import Contact from "../pages/home/contact/Contact";
import Products from "../pages/home/products/Products";
import Cart from "../pages/home/cart/Cart";

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        // loader: async ({ params }) => {
        //   try {
        //     const services_details = await fetch(
        //       `http://localhost:5000/services/${params.id}`
        //     ).then((response) => response.json());
        //     return { services_details };
        //   } catch (error) {
        //     console.error("Error loading data:", error);
        //     return {};
        //   }
        // },
      },
    ],
  },
]);
export default Routers;
