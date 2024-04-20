package fitmate_api.controller;

import fitmate_api.DTO.WorkoutStatusDTO;

import fitmate_api.response.WorkoutStatusResponse;
import fitmate_api.service.WorkoutStatusService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
