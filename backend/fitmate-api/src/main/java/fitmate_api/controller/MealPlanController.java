package fitmate_api.controller;

import fitmate_api.controller.request.MealPlanRequest;
import fitmate_api.controller.response.MealPlanResponse;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor

public class MealPlanController {

    private MealPlanService mealPlanService;

    @PostMapping("/users/{user_id}/meal_plans")
    public MealPlanResponse create(@PathVariable("user_id")Long userId, @RequestBody MealPlanRequest mealPlanRequest)throws UserNotFoundException {


        return mealPlanService.create(userId,mealPlanRequest);
    }


}
