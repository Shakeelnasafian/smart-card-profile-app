import api from "./api.js";

export const getProfile = async () => {
  return api.get('/profile');
}