import api from "./api.js";

export const getProfile = async (username = 'shakeel') => {
    return api.get('/viewer/profile',{ 
        params: { username }
    });
}