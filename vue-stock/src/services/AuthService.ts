import axios from "axios";
let url = "https://dummyjson.com/auth/";
const authService = axios.create({
  baseURL: url,
  withCredentials: false,
  headers: { "Content-Type": "application/json" }
});

export default authService;
