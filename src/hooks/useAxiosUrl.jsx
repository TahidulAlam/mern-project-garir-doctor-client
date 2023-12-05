/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";

const useAxiosUrl = () => {
  // const { logOut } = useAuth();
  const navigate = useNavigate();

  // Memoize the logOut function to prevent unnecessary re-renders
  // const logOutCallback = useCallback(logOut, []);

  // Memoize the axiosurl instance to prevent it from being recreated on every render
  const axiosurl = useMemo(
    () =>
      axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true,
      }),
    []
  );

  useEffect(() => {
    axiosurl.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          // logOut();
          console.log("object");
        }
      }
    );
  }, []);

  return axiosurl;
};

export default useAxiosUrl;
