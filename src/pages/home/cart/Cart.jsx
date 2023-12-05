/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../../hooks/useAxiosUrl";

const Cart = () => {
  const { user } = useAuth();
  const axiosUrl = useAxiosUrl();
  const [cartData, setCartData] = useState([]);
  const url = `/cart?email=${user?.email}`;
  const { isPending, error, data } = useQuery({
    queryKey: ["reata"],
    queryFn: () =>
      axiosUrl.get(url).then((res) => {
        return res.data;
      }),
  });
  useEffect(() => {
    if (isPending) {
      ("Loading..");
    } else if (error) {
      console.log(error);
    } else if (data) {
      setCartData(data);
    }
  }, [isPending, error, data, setCartData]);
  console.log(cartData);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/Cart/${id}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          const updatedData = cartData.filter((dd) => dd._id !== id);
          setCartData(updatedData);
        } else {
          alert("Deletion failed");
        }
      })
      .catch((error) => {
        console.error("Error deleting data", error);
      });
  };
  //   const handleUpdate = (id) => {
  //     axios
  //       .patch(`http://localhost:5000/Cart/${id}`, {
  //         state: "confirmed",
  //       })
  //       .then((res) => res.data)
  //       .then((data) => {
  //         if (data.modifiedCount > 0) {
  //           const remaining = cartData.filter((book) => book._id !== id);
  //           const updated = cartData.find((book) => book._id === id);
  //           updated.state = "confirmed";
  //           const newCart = [updated, ...remaining];
  //           setCartData(newCart);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error updating booking:", error);
  //       });
  //   };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-center overflow-scroll">
          <thead className="bg-white">
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Phone Number</th>
              <th>Delete </th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((booking) => (
              <tr key={booking._id}>
                {/* <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-auto h-12">
                        <img
                          src={booking.order.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.title}</div>
                      <div className="text-sm opacity-50">{booking?.date}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-orange-400">
                    {booking?.order.price}
                  </span>
                </td>
                <td>{booking?.floating_phone}</td>
                <th>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-error w-full"
                  >
                    delete
                  </button>
                </th> */}
                {/* <th>
                  {booking?.state === "confirmed" ? (
                    <span className="font-bold text-orange-500">Confirmed</span>
                  ) : (
                    <button
                      onClick={() => handleUpdate(booking._id)}
                      className="btn btn-accent w-full"
                    >
                      confirm
                    </button>
                  )}
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
