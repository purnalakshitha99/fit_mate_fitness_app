package fitmate_api.controller;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.exception.MealPlanNotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.User;
import fitmate_api.response.MealPlanResponse;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor

public class MealPlanController {

    private MealPlanService mealPlanService;

    @PostMapping("/users/{user_id}/meal_plans")
    public MealPlanResponse create(@PathVariable("user_id")Long userId, @RequestBody MealPlanDTO mealPlanDTO)throws UserNotFoundException {



        return mealPlanService.create(userId, mealPlanDTO);
    }


    @GetMapping("/users/{user_id}/meal_plans")
    public List<MealPlanResponse> getSpecificUserMealPlan(@PathVariable("user_id")Long userId)throws UserNotFoundException{

        return mealPlanService.getSpecificUserMealPlan(userId);
    }


    @GetMapping("/users/meal_plans")
    public List<MealPlanResponse> getAllMealPlan(){

        return mealPlanService.getAllMealPlan();
    }

    @DeleteMapping("/users/{user_id}/meal_plans/{meal_plan_id}")
    public MealPlanResponse deleteSpecificMealPlan(@PathVariable("user_id")Long userId,@PathVariable("meal_plan_id")Long mealPlanId)throws UserNotFoundException,MealPlanNotFoundException{

        return mealPlanService.deleteSpecificMealPlan(userId,mealPlanId);
    }


    @PutMapping("/users/{user_id}/meal_plans/{meal_plan_id}")
    public MealPlanResponse updateSpecificMealPlan(@PathVariable("user_id")Long userId,@PathVariable("meal_plan_id")Long mealPlanId,@RequestBody MealPlanDTO mealPlanDTO)throws MealPlanNotFoundException,UserNotFoundException{

        return mealPlanService.updateSpecificMealPlan(userId,mealPlanId,mealPlanDTO);
    }












}
