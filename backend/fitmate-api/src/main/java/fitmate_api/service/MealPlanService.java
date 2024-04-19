package fitmate_api.service;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.controller.response.MealPlanResponse;
import fitmate_api.exception.UserNotFoundException;



public interface MealPlanService {

   MealPlanResponse create(Long userId, MealPlanDTO mealPlanDTO)throws UserNotFoundException;
}
