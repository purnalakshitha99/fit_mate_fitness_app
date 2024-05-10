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
    return axios.post(BASE_URL + "/login", user);
  }

  savePost(post, userId) {
    return axios.post(BASE_URL_POST + "/" + userId, post);
  }

  followUsers(userId, followerId) {
    return axios.post(BASE_URL + "/" + userId + "/follow/" + followerId);
  }

  getPost() {
    return axios.get(BASE_URL);
  }

  updateUser(user, userId) {
    return axios.put(BASE_URL + "/" + userId, user);
  }

  clearNotifications(userId) {
    return axios.delete(BASE_URL + "/notifications/" + userId);
  }
}

export default new UserService();
