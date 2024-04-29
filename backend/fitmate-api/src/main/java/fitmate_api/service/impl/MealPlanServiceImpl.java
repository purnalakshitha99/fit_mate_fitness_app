package fitmate_api.service.impl;

import fitmate_api.DTO.MealPlanDTO;

import fitmate_api.exception.MealPlanNotFoundException;
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

    public List<MealPlanResponse> getSpecificUserMealPlans(Long userId)throws UserNotFoundException{

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
    public MealPlanResponse deleteSpecificMealPlan(Long userId, Long mealPlanId)throws UserNotFoundException,MealPlanNotFoundException {

        User user = userRepository.findById(userId).orElseThrow(
                ()-> new UserNotFoundException("that user not in a database")
        );


        List<MealPlan> mealPlanList = user.getMealPlanList();

        MealPlan deleteToMealPlan = mealPlanList.stream().filter(mealPlan -> mealPlan.getId().equals(mealPlanId)).findFirst().orElse(null);

        assert deleteToMealPlan != null;
        mealPlanRepository.delete(deleteToMealPlan);

        return MealPlanResponse.builder().id(deleteToMealPlan.getId()).title(deleteToMealPlan.getTitle()).description(deleteToMealPlan.getDescription()).recipes(deleteToMealPlan.getRecipes()).nutritional(deleteToMealPlan.getNutritional()).information(deleteToMealPlan.getInformation()).portionSizes(deleteToMealPlan.getPortionSizes()).creationDate(deleteToMealPlan.getCreationDate()).build();
    }

    @Override
    public MealPlanResponse updateSpecificMealPlan(Long userId, Long mealPlanId, MealPlanDTO mealPlanDTO) throws MealPlanNotFoundException, UserNotFoundException {

        User user = userRepository.findById(userId).orElseThrow(
                ()-> new UserNotFoundException("that user not in a database")
        );


        List<MealPlan> mealPlanList = user.getMealPlanList();

        MealPlan updateToMealPlan = mealPlanList.stream().filter(mealPlan -> mealPlan.getId().equals(mealPlanId)).findFirst().orElse(null);

        assert updateToMealPlan != null;
        updateToMealPlan.setUser(user);
        updateToMealPlan.setTitle(mealPlanDTO.getTitle());
        updateToMealPlan.setDescription(mealPlanDTO.getDescription());
        updateToMealPlan.setRecipes(mealPlanDTO.getRecipes());
        updateToMealPlan.setNutritional(mealPlanDTO.getNutritional());
        updateToMealPlan.setInformation(mealPlanDTO.getInformation());
        updateToMealPlan.setPortionSizes(mealPlanDTO.getPortionSizes());
        updateToMealPlan.setCreationDate(mealPlanDTO.getCreationDate());

        mealPlanRepository.save(updateToMealPlan);

        return MealPlanResponse.builder().id(updateToMealPlan.getId())
                .title(updateToMealPlan.getTitle())
                .description(updateToMealPlan.getDescription())
                .recipes(updateToMealPlan.getRecipes())
                .creationDate(updateToMealPlan.getCreationDate())
                .nutritional(updateToMealPlan.getNutritional())
                .information(updateToMealPlan.getInformation())
                .portionSizes(updateToMealPlan.getPortionSizes())
                .build();

    }

    @Override
    public MealPlanResponse getSpecificMealPlanInUser(Long userId, Long mealPlanId)throws MealPlanNotFoundException,UserNotFoundException {

        User user = userRepository.findById(userId).orElseThrow(
                ()-> new UserNotFoundException("that user not in a database")
        );


        List<MealPlan> mealPlanList = user.getMealPlanList();

        MealPlan getToMealPlan = mealPlanList.stream().filter(mealPlan -> mealPlan.getId().equals(mealPlanId)).findFirst().orElse(null);

        assert getToMealPlan != null;
        return MealPlanResponse.builder().id(getToMealPlan.getId()).title(getToMealPlan.getTitle()).description(getToMealPlan.getDescription()).recipes(getToMealPlan.getRecipes()).nutritional(getToMealPlan.getNutritional()).information(getToMealPlan.getInformation()).portionSizes(getToMealPlan.getPortionSizes()).creationDate(getToMealPlan.getCreationDate()).build();
    }


}
