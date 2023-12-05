/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import useAxiosUrl from "../../../hooks/useAxiosUrl";

const Products = () => {
  const axiosUrl = useAxiosUrl();
  const [productsData, setProductsData] = useState([]);
  const url = "/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosUrl.get(url);
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [url, axiosUrl]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 w-[95%] mx-auto">
        {productsData.map((product) => (
          <ProductsCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
