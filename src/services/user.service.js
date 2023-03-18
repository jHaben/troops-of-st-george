import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://jserv.jackhaben.com/";

// const API_URL = "http://localhost:5000/";

class UserService {
  getEvents() {
    return axios.get(API_URL + "event/byId?id=3");
  }

  addEvent(data) {
    return axios.post(API_URL + "event/add", data, { headers: authHeader() });
  }


  addUser(data) {
    return axios.post(API_URL + "member/add", data, { headers: authHeader()});
  }

  deleteEvent(data) {
    return axios.post(API_URL + "event/delete", data, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
