package fitmate_api.service;

import fitmate_api.controller.request.MealPlanRequest;
import fitmate_api.controller.response.MealPlanResponse;
import fitmate_api.exception.UserNotFoundException;



public interface MealPlanService {

   MealPlanResponse create(Long userId, MealPlanRequest mealPlanRequest)throws UserNotFoundException;
}
