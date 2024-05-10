package fitmate_api.service;

import fitmate_api.DTO.WorkOutStatusDTO;
import fitmate_api.exception.NotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.User;
import fitmate_api.response.WorkOutStatusResponse;

import java.util.List;

public interface WorkOutStatusService {
    WorkOutStatusResponse create(Long userId, WorkOutStatusDTO workOutStatusDTO)throws UserNotFoundException;

    List<WorkOutStatusResponse> getAllStatusById(Long id) throws UserNotFoundException;

    List<WorkOutStatusResponse> getAllStatus();

    void updateStatus(WorkOutStatusDTO workOutStatusDTO, Long id) throws NotFoundException;

    void deleteStatus(Long id) throws NotFoundException;

    WorkOutStatusResponse getStatusByStatId(Long id) throws NotFoundException;
}
