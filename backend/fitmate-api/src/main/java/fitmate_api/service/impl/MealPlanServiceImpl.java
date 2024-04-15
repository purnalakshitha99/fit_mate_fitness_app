package fitmate_api.service.impl;

import fitmate_api.controller.request.MealPlanRequest;
import fitmate_api.controller.response.MealPlanResponse;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.repository.MealPlanRepository;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor


public class MealPlanServiceImpl implements MealPlanService {

    private final MealPlanRepository mealPlanRepository;

    public MealPlanResponse create(Long userId, MealPlanRequest mealPlanRequest)throws UserNotFoundException {



    }
}
