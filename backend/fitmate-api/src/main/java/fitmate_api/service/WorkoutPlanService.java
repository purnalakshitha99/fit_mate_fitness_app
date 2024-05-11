package fitmate_api.service;

import fitmate_api.DTO.WorkOutPlanDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.WorkOutPlanResponse;
import org.springframework.stereotype.Service;

@Service
public interface WorkoutPlanService {
    WorkOutPlanResponse createWorkOutPlan(Long userId,WorkOutPlanDTO workOutPlanDTO)throws UserNotFoundException;
}
