package fitmate_api.service;

import fitmate_api.DTO.WorkoutStatusDTO;
import fitmate_api.response.MassageResponse;
import fitmate_api.response.WorkoutStatusResponse;

import java.util.List;

public interface WorkoutStatusService {


    WorkoutStatusResponse createWorkoutStatus(WorkoutStatusDTO workoutStatusDTO);

    List<WorkoutStatusResponse> getAllWorkoutStatus();


    MassageResponse deleteWorkoutStatus(Long workoutStatusId);

    WorkoutStatusResponse updateWorkoutStatus(Long workoutStatusId, WorkoutStatusDTO workoutStatusDTO);
}
