import axios from "axios";

const BASE_URL = "http://localhost:8080/api/comments";

class CommentService {
  saveComment(data) {
    // console.log(userId, postId, comment);
    return axios.post(BASE_URL + "/" + data.userId + "/post/" + data.postId, {
      commentText: data.commentText,
    });
  }

  getComments() {
    return axios.get(BASE_URL + "/");
  }

  editComment(commentId, comment) {
    return axios.put(BASE_URL + "/" + commentId, comment);
  }

  deleteComment(commentId){
    return axios.delete(BASE_URL + "/users/" + commentId)
  }
}

export default new CommentService();
