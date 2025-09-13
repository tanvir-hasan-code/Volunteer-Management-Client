import axios from "axios";
import React from "react";
import useAuth from "../Auth/useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosInstance.interceptors.request.use(
    (config) => {
      if (user?.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`;
    }
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
        return Promise.reject(error);
      }
    );

  return axiosInstance;
};

export default useAxiosSecure;
