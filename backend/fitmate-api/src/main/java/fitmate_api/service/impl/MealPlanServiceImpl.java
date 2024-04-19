package fitmate_api.service.impl;

import fitmate_api.DTO.MealPlanDTO;
import fitmate_api.controller.response.MealPlanResponse;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.MealPlan;
import fitmate_api.model.User;
import fitmate_api.repository.MealPlanRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor


public class MealPlanServiceImpl implements MealPlanService {

    private final MealPlanRepository mealPlanRepository;
    private final UserRepository userRepository;

    private ModelMapper modelMapper;

    public MealPlanResponse create(Long userId, MealPlanDTO mealPlanDTO)throws UserNotFoundException {

         User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("User not found")
        );

        MealPlan mealPlan = modelMapper.map(mealPlanDTO,MealPlan.class);

        mealPlan.setUser(user);

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
