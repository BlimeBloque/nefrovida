import axios from "axios";

export default axios.create({
  baseURL: "http://api.snefrovidaac.com/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
