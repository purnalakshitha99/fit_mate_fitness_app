import axios from "axios";

const BASE_URL = "http://localhost:8080";

class MealPlanFeedServices {
  

  getMealPlans() {
    return axios.get(BASE_URL+"/users/meal_plans");
  }

  getMealPlansByUser(userid) {
    return axios.get(BASE_URL +"/users/"+userid+"/meal_plans");
  }

  updateMealPlan(mealId, melplan){
    return axios.put(BASE_URL + "/meal_plans/" + mealId, melplan);
  }
}

export default new MealPlanFeedServices();