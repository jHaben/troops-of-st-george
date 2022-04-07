import axios from "axios";
export default axios.create({
  baseURL: "https://jserv.jackhaben.com",


  headers: {
    "Content-type": "application/json"
  }
});