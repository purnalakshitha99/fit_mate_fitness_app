import axios from "axios";

const BASE_URL = "http://localhost:8080/api/posts";

class PostService {
  savePost(post, userId) {
    return axios.post(BASE_URL + "/" + userId, post);
  }

  getPost() {
    return axios.get(BASE_URL);
  }

  getPostByUser(userid) {
    return axios.get(BASE_URL +"/" + userid);
  }
}

export default new PostService();
