import api from "./api.js";

export const getProjects = async () => {
  return api.get('/projects');
}