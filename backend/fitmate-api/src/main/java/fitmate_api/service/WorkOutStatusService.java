package fitmate_api.service;

import fitmate_api.DTO.WorkOutStatusDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.User;
import fitmate_api.response.WorkOutStatusResponse;

public interface WorkOutStatusService {
    WorkOutStatusResponse create(Long userId, WorkOutStatusDTO workOutStatusDTO)throws UserNotFoundException;
}
