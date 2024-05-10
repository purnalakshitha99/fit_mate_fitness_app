package fitmate_api.controller;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.MealPlanNotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.MealPlan;
import fitmate_api.response.MealPlanResponse;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;

import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@AllArgsConstructor

public class MealPlanController {

    private MealPlanService mealPlanService;


    @PostMapping("/users/{user_id}/meal_plans")
    public MealPlanResponse createMealPlan(@PathVariable("user_id")Long userId,@ModelAttribute MealPlanDTO mealPlanDTO, @RequestParam("imagePath")MultipartFile file)throws MealPlanNotFoundException,UserNotFoundException, IOException {

        return mealPlanService.createMealPlan(userId,mealPlanDTO,file);
    }

    @GetMapping("/users/meal_plans")
   public List<MealPlanResponse> getAllMealPlan(){

        return mealPlanService.getAllMealPlan();
   }

    @GetMapping("/users/{user_id}/meal_plans")
    public List<MealPlanResponse> getSpecificUserMealPlans(@PathVariable("user_id")Long userId)throws UserNotFoundException,MealPlanNotFoundException{

        return mealPlanService.getSpecificUserMealPlans(userId);

    }


    @GetMapping("/meal_plans/{meal_plan_id}")

    public MealPlanResponse getSpecificUserSpecificMealPlan(@PathVariable("meal_plan_id")Long mealPlanId)throws MealPlanNotFoundException{

        return mealPlanService.getSpecificUserSpecificMealPlan(mealPlanId);
    }

    @DeleteMapping("/meal_plans/{meal_plan_id}")
    public MealPlanResponse deleteSpecificUserSpecificMealPlan(@PathVariable("meal_plan_id")Long mealPlanId)throws MealPlanNotFoundException{

        return mealPlanService.deleteSpecificUserSpecificMealPlan(mealPlanId);
    }

    @PutMapping("/meal_plans/{meal_plan_id}")
    public MealPlanResponse updateSpecificUserSpecificMealPlan(@PathVariable("meal_plan_id")Long mealPlanId, @ModelAttribute MealPlanDTO mealPlanDTO, @RequestParam("imagePath")MultipartFile file)throws MealPlanNotFoundException,IOException{

        return mealPlanService.updateSpecificUserSpecificMealPlan(mealPlanId,mealPlanDTO,file);
    }

//    @GetMapping("/users/{user_id}/meal_plans/{meal_plan_id}")
//    public MealPlanResponse getSpecificUserSpecificMealPlan(@PathVariable("user_id")Long userId,@PathVariable("meal_plan_id")Long mealPlanId)throws MealPlanNotFoundException,UserNotFoundException{
//
//        return mealPlanService.getSpecificUserSpecificMealPlan(userId,mealPlanId);
//    }

//    @DeleteMapping("/users/{user_id}/meal_plans/{meal_plan_id}")
//    public MealPlanResponse deleteSpecificUserSpecificMealPlan(@PathVariable("user_id")Long userId,@PathVariable("meal_plan_id")Long mealPlanId)throws MealPlanNotFoundException,UserNotFoundException{
//
//        return mealPlanService.deleteSpecificUserSpecificMealPlan(userId,mealPlanId);
//    }


//    @PutMapping("/users/{user_id}/meal_plans/{meal_plan_id}")
//    public MealPlanResponse updateSpecificUserSpecificMealPlan(@PathVariable("user_id")Long userId, @PathVariable("meal_plan_id")Long mealPlanId, @ModelAttribute MealPlanDTO mealPlanDTO, @RequestParam("imagePath")MultipartFile file)throws UserNotFoundException,MealPlanNotFoundException,IOException{
//
//        return mealPlanService.updateSpecificUserSpecificMealPlan(userId,mealPlanId,mealPlanDTO,file);
//    }
















}
