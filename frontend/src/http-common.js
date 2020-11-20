import axios from "axios";

export default axios.create({
  baseURL: "https://api.snefrovidaac.com/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
