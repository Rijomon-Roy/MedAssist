import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach JWT token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Register User
export const register = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

// Login User
export const login = async (userData) => {
  const response = await API.post("/auth/login", userData);
  return response.data;
};

// Forgot Password
export const forgotPassword = async (email) => {
  const response = await API.post("/auth/forgot-password", {
    email,
  });

  return response.data;
};

// Reset Password
export const resetPassword = async (token, password) => {
  const response = await API.post(`/auth/reset-password/${token}`, {
    password,
  });

  return response.data;
};

export default API;