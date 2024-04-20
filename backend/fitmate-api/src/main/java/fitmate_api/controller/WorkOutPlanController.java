package fitmate_api.controller;

import fitmate_api.DTO.WorkOutPlanDTO;
import fitmate_api.response.WorkOutPlanResponse;
import fitmate_api.service.WorkoutPlanService;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor

public class WorkOutPlanController {

    private WorkoutPlanService workoutPlanService;

    @PostMapping("/work_out_plans")
   public WorkOutPlanResponse createWorkOutPlan(@RequestBody WorkOutPlanDTO workOutPlanDTO){


        System.out.println("geer ===================== "+workOutPlanDTO.getWeight());

       return workoutPlanService.createWorkOutPlan(workOutPlanDTO);
   }

}


