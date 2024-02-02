import axios from "axios";

const baseURL =  "https://602e7c2c4410730017c50b9d.mockapi.io";
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;