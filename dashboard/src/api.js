import axios from "axios";

// Set REACT_APP_API_BASE_URL in Vercel for this dashboard project.
// The fallback keeps local development working with the local Express API.
const API_BASE_URL = (
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3002"
).replace(/\/$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
