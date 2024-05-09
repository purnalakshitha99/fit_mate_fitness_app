import axios from "axios";

const BASE_URL = "http://localhost:8080/users/status";

class StatusService {
  createStatus(userId, status) {
    return axios.post(BASE_URL + "/" + userId, status);
  }

  getAllStatus() {
    return axios.get(BASE_URL);
  }

  getByUserId(userId) {
    return axios.get(BASE_URL + "/" + userId);
  }

  updateStatus(userId, status) {
    return axios.put(BASE_URL + "/" + userId, status);
  }

  deleteStatus(statusId) {
    return axios.delete(BASE_URL + "/" + statusId)
  }
}
export default new StatusService();
