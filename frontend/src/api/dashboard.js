import axios from "axios";

const API_BASE = process.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
console.log("API_BASE:", API_BASE);


export const getDashboardData = async () => {
  const response = await axios.get(`${API_BASE}/dashboard`);
  return response.data;
};
