import axios from "axios";
export default axios.create({
  baseURL: "https://jserv.jackhaben.com",

  // baseURL: "http://localhost:5000",

  headers: {
    "Content-type": "application/json"
  }
});