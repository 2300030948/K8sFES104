import axios from "axios";

// ✅ Switch backend URL depending on environment
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:30083/back1/auth" // local dev (NodePort)
    : "http://backend:8080/back1/auth";   // in-cluster K8s service

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/sign`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
