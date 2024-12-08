import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002", // Replace with your backend URL
  withCredentials: true, // Include cookies for authentication if needed
});

export default api;
