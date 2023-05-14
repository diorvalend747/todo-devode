import axios from "axios";

const config = axios.create({
  baseURL: "https://todo.api.devcode.gethired.id",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default config;
