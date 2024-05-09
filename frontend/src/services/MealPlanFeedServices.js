import axios from "axios";

const BASE_URL = "http://localhost:8080";

class MealPlanFeedServices {
  

  getMealPlans() {
    return axios.get(BASE_URL+"/users/meal_plans");
  }

  getMealPlansByUser(userid) {
    return axios.get(BASE_URL +"/users/"+userid+"/meal_plans");
  }
}

export default new MealPlanFeedServices();