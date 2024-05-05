package fitmate_api.service;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.MealPlanNotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.MealPlanResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


public interface MealPlanService {

//   MealPlanResponse create(Long userId, MealPlanDTO mealPlanDTO)throws UserNotFoundException;

   List<MealPlanResponse> getSpecificUserMealPlans(Long userId)throws UserNotFoundException;

   List<MealPlanResponse> getAllMealPlan();


   MealPlanResponse deleteSpecificMealPlan(Long userId, Long mealPlanId)throws UserNotFoundException,MealPlanNotFoundException;

   MealPlanResponse updateSpecificMealPlan(Long userId, Long mealPlanId, MealPlanDTO mealPlanDTO)throws MealPlanNotFoundException,UserNotFoundException;

   MealPlanResponse getSpecificMealPlanInUser(Long userId, Long mealPlanId)throws MealPlanNotFoundException,UserNotFoundException;

   MealPlanResponse createMealPlan(Long userId, MealPlanDTO mealPlanDTO, MultipartFile file)throws MealPlanNotFoundException,UserNotFoundException, IOException;
}
