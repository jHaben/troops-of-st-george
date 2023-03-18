import axios from "axios";



 const API_URL = "https://jserv.jackhaben.com/";

// const API_URL = "http://localhost:5000/";


class AuthService {
  async login(user) {
    const response = await axios.post(
      API_URL + "authenticate",
      {
        username: user.username,
        password: user.password,
        websiteId: 3,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("username", user.username);
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
