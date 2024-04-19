package fitmate_api.service.impl;

import fitmate_api.request.MealPlanRequest;
import fitmate_api.response.MealPlanResponse;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.MealPlan;
import fitmate_api.repository.MealPlanRepository;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor


public class MealPlanServiceImpl implements MealPlanService {

    private final MealPlanRepository mealPlanRepository;

    private ModelMapper modelMapper;

    public MealPlanResponse create(Long userId, MealPlanRequest mealPlanRequest)throws UserNotFoundException {

        MealPlan mealPlan = modelMapper.map(mealPlanRequest,MealPlan.class);

        mealPlanRepository.save(mealPlan);

        return MealPlanResponse.builder().id(mealPlan.getId())
                .title(mealPlan.getTitle())
                .description(mealPlan.getDescription())
                .recipes(mealPlan.getRecipes())
                .creationDate(mealPlan.getCreationDate())
                .nutritional(mealPlan.getNutritional())
                .information(mealPlan.getInformation())
                .portionSizes(mealPlan.getPortionSizes())
                .build();

    }
}
