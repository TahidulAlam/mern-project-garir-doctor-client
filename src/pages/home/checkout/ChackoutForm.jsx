/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const ChackoutForm = ({ lodedData }) => {
  const { _id, price, img, title } = lodedData || {};
  const { user } = useAuth();
  console.log(user);

  // const addCheckOut = async (data) => {
  //   const response = await axios.post("http://localhost:5000/bookings", data);
  //   return response.data;
  // };

  // const queryClient = useQueryClient();
  // const { mutateAsync: addMemoryMutation } = useMutation({
  //   mutationFn: addCheckOut,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("memories");
  //   },
  // });

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const floating_phone = form.floating_phone.value;
    const order = {
      customername: name,
      email,
      date,
      img,
      service: _id,
      price: price,
    };
    const checkOutData = { title, name, date, email, floating_phone, order };
    console.log(checkOutData);
    // addMemoryMutation(checkOutData);
    axios.post("http://localhost:5000/bookings", checkOutData).then((res) => {
      if (res.data.insertedId) {
        toast.success("booking service successfully");
      }
    });
  };

  return (
    <div>
      {/* <h1>{todayDate}</h1> */}
      <div className="w-4/5 mx-auto p-20 rounded-lg m-5">
        <form onSubmit={handleBookService}>
          <div className="grid md:grid-cols-2 md:gap-6 ">
            <div className="relative z-0 bg-white p-3 w-full mb-6 group rounded-xl">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                defaultValue={user?.displayName}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 bg-white p-3 w-full mb-6 group">
              <input
                type="date"
                name="date"
                id="floating_date"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
                // defaultValue={{ todayDate }}
              />
              <label
                htmlFor="floating_date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 bg-white p-3 w-full mb-6 group">
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 bg-white p-3 w-full mb-6 group">
              <input
                type="price"
                name="floating_price"
                id="floating_price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0  peer"
                placeholder=" "
                defaultValue={"$" + price}
                required
              />
              <label
                htmlFor="floating_price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
          </div>
          <div className="relative z-0 bg-white p-3 w-full mb-6 group">
            <textarea
              name="message"
              id="meassage"
              cols="3"
              rows="1"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm w-[100%]  px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500"
          >
            Order confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChackoutForm;
