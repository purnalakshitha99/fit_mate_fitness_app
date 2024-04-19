package fitmate_api.service;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.MealPlanResponse;


public interface MealPlanService {

   MealPlanResponse create(Long userId, MealPlanDTO mealPlanDTO)throws UserNotFoundException;
}
