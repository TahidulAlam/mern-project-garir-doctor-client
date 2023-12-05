/* eslint-disable no-unused-vars */
// import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChackoutForm from "./ChackoutForm";
import useAxiosUrl from "../../../hooks/useAxiosUrl";

const Checkout = () => {
  const axiosUrl = useAxiosUrl();
  const [serviceData, setServiceData] = useState([]);
  const params = useParams();
  console.log(params);
  const url = `/services/${params.id}`;
  axiosUrl.get(url).then((res) => setServiceData(res.data));
  return (
    <div>
      <h1>
        Booking Service of{" "}
        <span className="text-orange-500">{serviceData.title}</span>
      </h1>
      <div>
        <ChackoutForm lodedData={serviceData}></ChackoutForm>
      </div>
    </div>
  );
};

export default Checkout;
