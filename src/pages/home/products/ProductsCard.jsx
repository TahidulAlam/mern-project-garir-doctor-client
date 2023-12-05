/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import useAxiosUrl from "../../../hooks/useAxiosUrl";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const ProductsCard = ({ data }) => {
  const [count, setCount] = useState(1);
  const { user } = useAuth();
  const email = user?.email;
  const { imageLink, name, price } = data || {};
  const axiosUrl = useAxiosUrl();
  const url = "/cart";

  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      imageLink,
      name,
      price: (price * count).toFixed(2),
      count,
      email,
    };

    try {
      const response = await axiosUrl.post(url, dataToSend);
      if (response.data.acknowledged === true) {
        toast.success("Add to cart successfully");
      } else {
        toast.error("anything wrong");
      }
    } catch (error) {
      toast.error("anything wrong", error);
    }
  };

  return (
    <div>
      <div className="card w-auto h-[470px] bg-white cursor-pointer p-5">
        <figure className="px-10 pt-10 h-48 bg-slate-100">
          <img src={imageLink} alt={name} className="rounded-xl w-32 h-24" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{(price * count).toFixed(2)}</h2>
          <div className="flex justify-between text-2xl gap-4">
            <span className="font-semibold" onClick={handlePlus}>
              +
            </span>
            <span>{count}</span>
            <span className="font-semibold" onClick={handleMinus}>
              -
            </span>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
