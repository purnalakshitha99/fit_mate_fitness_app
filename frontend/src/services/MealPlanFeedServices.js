import axios from "axios";

const BASE_URL = "http://localhost:8080";

class MealPlanFeedServices {
  

  getMealPlans() {
    return axios.get(BASE_URL+"/users/meal_plans");
  }

  getPostByUser(userid) {
    return axios.get(BASE_URL +"/" + userid);
  }
}

export default new MealPlanFeedServices();