package fitmate_api.controller;

import fitmate_api.DTO.WorkoutStatusDTO;

import fitmate_api.response.MassageResponse;
import fitmate_api.response.WorkoutStatusResponse;
import fitmate_api.service.WorkoutStatusService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor

public class WorkoutStatusController {

    private WorkoutStatusService workoutStatusService;

    @PostMapping("/workout_status")
    public WorkoutStatusResponse createWorkoutStatus (@RequestBody WorkoutStatusDTO workoutStatusDTO){


        System.out.printf("workout status========="+workoutStatusDTO.getTypeOfWorkout());
        System.out.printf("workout status========="+workoutStatusDTO.getNumberOfPushUp());
        return workoutStatusService.createWorkoutStatus(workoutStatusDTO);
    }

    @GetMapping("/workout_status")
    public List<WorkoutStatusResponse>getAllWorkoutStatus(){
        return workoutStatusService.getAllWorkoutStatus();
    }

    @DeleteMapping("/work_out_status/{work_out_status_id}")
    public MassageResponse deleteWorkoutStatus (@PathVariable("work_out_status_id")Long workoutStatusId){
        return workoutStatusService.deleteWorkoutStatus(workoutStatusId);
    }

    @PutMapping("/work_out_status/{work_out_status_id}")
    public WorkoutStatusResponse updateWorkoutStatus (@PathVariable("work_out_status_id")Long workoutStatusId, @RequestBody WorkoutStatusDTO workoutStatusDTO){
        return workoutStatusService.updateWorkoutStatus(workoutStatusId,workoutStatusDTO);
    }

}
