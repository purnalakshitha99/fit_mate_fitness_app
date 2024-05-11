package fitmate_api.service.impl;

import fitmate_api.DTO.WorkOutPlanDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.MealPlan;
import fitmate_api.model.User;
import fitmate_api.model.WorkoutPlan;
import fitmate_api.repository.MealPlanRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.repository.WorkoutPlanRepository;
import fitmate_api.response.MealPlanResponse;
import fitmate_api.response.WorkOutPlanResponse;
import fitmate_api.service.WorkoutPlanService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor


public class WorkOutPlanServiceImpl implements WorkoutPlanService {

    private  final WorkoutPlanRepository workoutPlanRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final MealPlanRepository mealPlanRepository;


    @Override
    public WorkOutPlanResponse createWorkOutPlan(Long userId,WorkOutPlanDTO workOutPlanDTO)throws UserNotFoundException {


        User user = userRepository.findById(userId).orElseThrow(
                ()-> new UserNotFoundException("that user not in a database")
        );

        WorkoutPlan workoutPlan = modelMapper.map(workOutPlanDTO, WorkoutPlan.class);

        workoutPlan.setUser(user);

        workoutPlanRepository.save(workoutPlan);

        return modelMapper.map(workoutPlan, WorkOutPlanResponse.class);


    }

    @Override
    public List<WorkOutPlanResponse> getAll() {

        List<WorkoutPlan> workoutPlanList = workoutPlanRepository.findAll();

        List<WorkOutPlanResponse> workOutPlanResponseList = new ArrayList<>();

        for (WorkoutPlan workoutPlan:workoutPlanList){

            WorkOutPlanResponse workOutPlanResponse = modelMapper.map(workoutPlan,WorkOutPlanResponse.class);
            workOutPlanResponseList.add(workOutPlanResponse);

        }

        return workOutPlanResponseList;


    }
}
