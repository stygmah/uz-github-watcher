import axios from "axios";

export const backendCall = axios.create({
  baseURL: "http://localhost:3200",
  headers: {
    "Content-type": "application/json"
  }
});

