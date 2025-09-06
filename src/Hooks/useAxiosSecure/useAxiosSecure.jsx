import axios from "axios";
import React from "react";
import useAuth from "../Auth/useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
//   const { user, signOutUser } = useAuth();

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  ),
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // if (error.status === 500 || error.status === 403) {
        //   signOutUser().then(() => console.log("Status Code error 500"));
        // }
        return Promise.reject(error);
      }
    );

  return axiosInstance;
};

export default useAxiosSecure;
