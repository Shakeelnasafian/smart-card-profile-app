import api from "./api.js";

export const getDashboardData = async () => {
  return api.get('/dashboard');
};