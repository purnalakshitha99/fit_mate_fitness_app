package fitmate_api.service;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.MealPlanNotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.MealPlanResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


public interface MealPlanService {


   MealPlanResponse createMealPlan(Long userId, MealPlanDTO mealPlanDTO, MultipartFile file)throws MealPlanNotFoundException,UserNotFoundException, IOException;

   List<MealPlanResponse> getAllMealPlan();

   List<MealPlanResponse> getSpecificUserMealPlans(Long userId)throws UserNotFoundException,MealPlanNotFoundException;

//   MealPlanResponse getSpecificUserSpecificMealPlan(Long userId, Long mealPlanId)throws UserNotFoundException,MealPlanNotFoundException;

//   MealPlanResponse deleteSpecificUserSpecificMealPlan(Long userId, Long mealPlanId)throws UserNotFoundException,MealPlanNotFoundException;

//   MealPlanResponse updateSpecificUserSpecificMealPlan(Long userId, Long mealPlanId, MealPlanDTO mealPlanDTO, MultipartFile file) throws UserNotFoundException, MealPlanNotFoundException, IOException;

   MealPlanResponse getSpecificUserSpecificMealPlan(Long mealPlanId)throws MealPlanNotFoundException;

   MealPlanResponse deleteSpecificUserSpecificMealPlan(Long mealPlanId)throws MealPlanNotFoundException;

   MealPlanResponse updateSpecificUserSpecificMealPlan(Long mealPlanId,MealPlanDTO mealPlanDTO,MultipartFile file)throws MealPlanNotFoundException,IOException;
}
