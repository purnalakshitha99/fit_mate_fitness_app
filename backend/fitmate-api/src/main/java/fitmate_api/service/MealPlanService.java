package fitmate_api.service;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.MealPlanResponse;

import java.util.List;


public interface MealPlanService {

   MealPlanResponse create(Long userId, MealPlanDTO mealPlanDTO)throws UserNotFoundException;

   List<MealPlanResponse> getSpecificUserMealPlan(Long userId)throws UserNotFoundException;

   List<MealPlanResponse> getAllMealPlan();

   void deleteSpecificMealPlanForUser(Long userId, Long mealPlanId)throws UserNotFoundException;
}
