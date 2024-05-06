import axios from "axios";

const BASE_URL = "http://localhost:8080/api/share";

class ShareSrvice {
  sharePost(shrePost) {
    return axios.post(BASE_URL, shrePost);
  }

  getSharedPost(){
    return axios.get(BASE_URL)
  }
}
export default new ShareSrvice();
