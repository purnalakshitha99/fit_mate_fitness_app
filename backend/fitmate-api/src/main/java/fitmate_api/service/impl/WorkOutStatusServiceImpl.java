package fitmate_api.service.impl;

import fitmate_api.DTO.WorkOutStatusDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.User;
import fitmate_api.model.WorkOutStatus;
import fitmate_api.repository.UserRepository;
import fitmate_api.repository.WorkOutStatusRepository;
import fitmate_api.response.WorkOutStatusResponse;
import fitmate_api.service.WorkOutStatusService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class WorkOutStatusServiceImpl implements WorkOutStatusService {

    private final UserRepository userRepository;
    private final WorkOutStatusRepository workOutStatusRepository;
    private ModelMapper modelMapper;


    @Override
    public WorkOutStatusResponse create(Long userId, WorkOutStatusDTO workOutStatusDTO) throws UserNotFoundException {

        User user = userRepository.findById(userId).orElseThrow(
                ()-> new UserNotFoundException("that user not in a database")
        );


        WorkOutStatus workOutStatus = modelMapper.map(workOutStatusDTO,WorkOutStatus.class);
        workOutStatus.setUser(user);

        workOutStatusRepository.save(workOutStatus);

        return modelMapper.map(workOutStatus,WorkOutStatusResponse.class);


    }
}
