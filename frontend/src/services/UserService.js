import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";
// const BASE_URL_2 = "http://localhost:8080/users/register";

class UserService {
  getUser() {
    return axios.get(BASE_URL);
  }

  getUserById(userId) {
    return axios.get(BASE_URL + "/" + userId);
  }

  saveUser(user) {
    return axios.post(BASE_URL, user);
  }

  loginUser(user) {
    return axios.post(BASE_URL + "/login" ,user)
  }
}

export default new UserService();
