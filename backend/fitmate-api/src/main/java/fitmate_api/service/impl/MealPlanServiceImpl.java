package fitmate_api.service.impl;

import fitmate_api.DTO.MealPlanDTO;

import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.MealPlan;
import fitmate_api.model.User;
import fitmate_api.repository.MealPlanRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.response.MealPlanResponse;
import fitmate_api.response.UserResponse;
import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<MealPlanResponse> getSpecificUserMealPlan(Long userId)throws UserNotFoundException{

      User user = userRepository.findById(userId).orElseThrow(
              () -> new UserNotFoundException("that user not in a database")
      );

      List<MealPlan> mealPlanList = user.getMealPlanList();

      return mealPlanList.stream().map(mealPlan -> MealPlanResponse.builder()
              .id(mealPlan.getId())
              .title(mealPlan.getTitle())
              .description(mealPlan.getDescription())
              .recipes(mealPlan.getRecipes())
              .creationDate(mealPlan.getCreationDate())
              .nutritional(mealPlan.getNutritional())
              .information(mealPlan.getInformation())
              .portionSizes(mealPlan.getPortionSizes()).build()).toList();
    }

    @Override
    public List<MealPlanResponse> getAllMealPlan() {

        List<MealPlan> mealPlanList = mealPlanRepository.findAll();

        return mealPlanList.stream().map(mealPlan -> MealPlanResponse.builder()
                .id(mealPlan.getId())
                .title(mealPlan.getTitle())
                .description(mealPlan.getDescription())
                .recipes(mealPlan.getRecipes())
                .creationDate(mealPlan.getCreationDate())
                .nutritional(mealPlan.getNutritional())
                .information(mealPlan.getInformation())
                .portionSizes(mealPlan.getPortionSizes()).build()).toList();
    }

    @Override
    public void deleteSpecificMealPlanForUser(Long userId, Long mealPlanId) throws UserNotFoundException {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("that user not in a database")
        );

        List<MealPlan> mealPlanList = user.getMealPlanList();
    }
}
