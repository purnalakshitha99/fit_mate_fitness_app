import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";
// const BASE_URL_2 = "http://localhost:8080/users/register";
const BASE_URL_POST = "http://localhost:8080/api/posts";

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

  savePost(post, userId){
    return axios.post(BASE_URL_POST, post, userId)
  }
}

export default new UserService();
