package fitmate_api.controller;

import fitmate_api.DTO.WorkOutPlanDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.WorkOutPlanResponse;
import fitmate_api.service.WorkoutPlanService;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor

public class WorkOutPlanController {

    private WorkoutPlanService workoutPlanService;

    @PostMapping("/users/{user_id}/work_out_plans")
   public WorkOutPlanResponse createWorkOutPlan(@PathVariable("user_id")Long userId, @RequestBody WorkOutPlanDTO workOutPlanDTO) throws UserNotFoundException {


        System.out.println("routing name :"+workOutPlanDTO.getDescription());

        return workoutPlanService.createWorkOutPlan(userId,workOutPlanDTO);
   }

}


