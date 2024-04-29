package fitmate_api.service.impl;

import fitmate_api.DTO.WorkOutPlanDTO;
import fitmate_api.model.WorkoutPlan;
import fitmate_api.repository.WorkoutPlanRepository;
import fitmate_api.response.WorkOutPlanResponse;
import fitmate_api.service.WorkoutPlanService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor


public class WorkOutPlanServiceImpl implements WorkoutPlanService {

    private  final WorkoutPlanRepository workoutPlanRepository;


    @Override
    public WorkOutPlanResponse createWorkOutPlan(WorkOutPlanDTO workOutPlanDTO) {

        WorkoutPlan workoutPlan = new WorkoutPlan() ;


        workoutPlan.setWeight(workOutPlanDTO.getWeight());
        workoutPlan.setGender(workOutPlanDTO.getGender());
        workoutPlan.setAge(workOutPlanDTO.getAge());
        workoutPlan.setWorkOutGoals(workOutPlanDTO.getWorkOutGoals());
        workoutPlan.setHeight(workOutPlanDTO.getHeight());

        workoutPlanRepository.save(workoutPlan);

        return null;



    }
}
