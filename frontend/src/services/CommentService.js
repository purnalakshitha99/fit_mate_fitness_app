import axios from "axios";

const BASE_URL = "http://localhost:8080/api/comments";


class UserService {
    saveComment(userId, postId, comment) {
        return axios.post(BASE_URL + "/" + userId + "/post/" + postId , comment);
      }
}

export default new UserService();
