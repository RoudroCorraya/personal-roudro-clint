// src/hooks/useAxiosSecure.js
import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});

// Attach the token before every request
const useAxiosSecure = () => {
  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Eject interceptor on unmount
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
