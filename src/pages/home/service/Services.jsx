/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import useAxiosUrl from "../../../hooks/useAxiosUrl";
// import axios from "axios";

const Services = () => {
  const axiosUrl = useAxiosUrl();
  const [serviceData, setServiceData] = useState([]);
  const url = "/services";
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axiosUrl.get(url).then((res) => {
        return res.data;
      }),
  });
  useEffect(() => {
    if (isPending) {
      ("Loading..");
    } else if (error) {
      "An error has occurred: " + error.message;
    } else if (data) {
      setServiceData(data);
    }
  }, [isPending, error, data, setServiceData]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-orange-500">Service</h1>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <h1 className="text-center text-slate-400">
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised{" "}
          </p>
          <p>words which don't look even slightly believable.</p>{" "}
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-[95%] mx-auto">
          {serviceData &&
            Array.isArray(serviceData) &&
            serviceData.map((dd) => (
              <ServicesCard key={dd._id} serviceData={dd}></ServicesCard>
            ))}
        </div>
        <button className="btn btn-outline mt-5 text-orange-400 border-orange-400 hover:bg-orange-400 hover:border-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
