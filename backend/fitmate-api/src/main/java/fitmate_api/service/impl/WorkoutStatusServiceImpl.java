package fitmate_api.service.impl;

import fitmate_api.DTO.WorkoutStatusDTO;
import fitmate_api.model.WorkoutStatus;
import fitmate_api.repository.WorkoutStatusRepository;
import fitmate_api.response.MassageResponse;
import fitmate_api.response.MealPlanResponse;
import fitmate_api.response.WorkoutStatusResponse;
import fitmate_api.service.WorkoutStatusService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class WorkoutStatusServiceImpl implements WorkoutStatusService {

    private final ModelMapper modelMapper;
    private final WorkoutStatusRepository workoutStatusRepository;

    public WorkoutStatusResponse createWorkoutStatus (WorkoutStatusDTO workoutStatusDTO){


        System.out.printf("workout status+++++++++++++++++++++++"+workoutStatusDTO.getTypeOfWorkout());
        System.out.println("===========");
        System.out.printf("workout status+++++++++++++++++++++"+workoutStatusDTO.getNumberOfPushUp());

      WorkoutStatus workoutStatus = new WorkoutStatus();

      workoutStatus.setTypeOfWorkout(workoutStatusDTO.getTypeOfWorkout());
      workoutStatus.setNumberOfPushUp(workoutStatusDTO.getNumberOfPushUp());
        workoutStatusRepository.save(workoutStatus);

        return WorkoutStatusResponse.builder().id(workoutStatus.getId())
                .typeOfWorkout(workoutStatus.getTypeOfWorkout())
                .date(workoutStatus.getDate())
                .time(workoutStatus.getTime())
                .numberOfPushUp(workoutStatus.getNumberOfPushUp())
                .build();
    }

    @Override
    public List<WorkoutStatusResponse> getAllWorkoutStatus() {
         List<WorkoutStatus> workoutStatusList = workoutStatusRepository.findAll();

         return workoutStatusList.stream().map(workoutStatus -> WorkoutStatusResponse.builder()
                 .numberOfPushUp(workoutStatus.getNumberOfPushUp())
                 .typeOfWorkout(workoutStatus.getTypeOfWorkout()).build()).toList();
    }

    @Override
    public MassageResponse deleteWorkoutStatus(Long workoutStatusId) {

        workoutStatusRepository.deleteById(workoutStatusId);

        MassageResponse massageResponse = new  MassageResponse();
        massageResponse.setMessage("Workout status deleted");

        return massageResponse;
    }

    @Override
    public WorkoutStatusResponse updateWorkoutStatus(Long workoutStatusId, WorkoutStatusDTO workoutStatusDTO) {

        Optional<WorkoutStatus> workoutStatusOptional = workoutStatusRepository.findById(workoutStatusId);

        if (!workoutStatusOptional.isPresent()) {

            System.out.println("workout status not found");


        }

        WorkoutStatus workoutStatus = workoutStatusOptional.get();
        workoutStatus.setTypeOfWorkout(workoutStatusDTO.getTypeOfWorkout());
        workoutStatus.setNumberOfPushUp(workoutStatusDTO.getNumberOfPushUp());
        workoutStatus.setDate(workoutStatusDTO.getDate());
        workoutStatus.setTime(workoutStatusDTO.getTime());
        workoutStatusRepository.save(workoutStatus);

        WorkoutStatusResponse workoutStatusResponse = WorkoutStatusResponse.builder()
                .typeOfWorkout(workoutStatus.getTypeOfWorkout())
                .numberOfPushUp(workoutStatus.getNumberOfPushUp())
                .build();

        return workoutStatusResponse;

    }
}

