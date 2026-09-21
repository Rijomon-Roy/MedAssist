import API from "./authService";

// Get logged-in user's profile
export const getUserProfile = async () => {
  const response = await API.get("/users/profile");
  return response.data;
};

// Update logged-in user's profile
export const updateUserProfile = async (userData) => {
  const response = await API.put("/users/profile", userData);
  return response.data;
};