import api from './api.js';

export const login = async (username, password) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  return api.post('/auth/token', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getCurrentUser = async () => {
  return api.get('/auth/me');
};