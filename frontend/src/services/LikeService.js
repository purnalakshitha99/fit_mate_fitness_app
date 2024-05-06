import axios from "axios";

const BASE_URL = "http://localhost:8080/api/posts/";

class LikeService {
  setLike(userId, postId) {
    return axios.post(BASE_URL + "user/" + userId + "/post/" + postId);
  }
}
export default new LikeService();
