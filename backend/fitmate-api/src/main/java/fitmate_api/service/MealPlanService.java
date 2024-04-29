package fitmate_api.service;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.MealPlanNotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.MealPlanResponse;

import java.util.List;


public interface MealPlanService {

   MealPlanResponse create(Long userId, MealPlanDTO mealPlanDTO)throws UserNotFoundException;

   List<MealPlanResponse> getSpecificUserMealPlan(Long userId)throws UserNotFoundException;

   List<MealPlanResponse> getAllMealPlan();


   MealPlanResponse deleteSpecificMealPlan(Long userId, Long mealPlanId)throws UserNotFoundException,MealPlanNotFoundException;

   MealPlanResponse updateSpecificMealPlan(Long userId, Long mealPlanId, MealPlanDTO mealPlanDTO)throws MealPlanNotFoundException,UserNotFoundException;
}
