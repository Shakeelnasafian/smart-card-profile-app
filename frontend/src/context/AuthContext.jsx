import React, { createContext, useState, useEffect, useContext } from 'react';
import { login, getCurrentUser } from '../api/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if we have a token in localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      // Verify the token and get user info
      getCurrentUser()
        .then(response => {
          setUser(response.data);
        })
        .catch(err => {
          console.error("Error validating token:", err);
          localStorage.removeItem('token'); // Remove invalid token
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const loginUser = async (username, password) => {
    setError(null);
    try {
      const response = await login(username, password);
      localStorage.setItem('token', response.data.access_token);
      
      // Get user information after login
      const userInfo = await getCurrentUser();
      setUser(userInfo.data);
      return true;
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    error,
    loginUser,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};