package fitmate_api.service.impl;

import fitmate_api.DTO.WorkOutStatusDTO;
import fitmate_api.exception.NotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.User;
import fitmate_api.model.WorkOutStatus;
import fitmate_api.repository.UserRepository;
import fitmate_api.repository.WorkOutStatusRepository;
import fitmate_api.response.WorkOutStatusResponse;
import fitmate_api.service.WorkOutStatusService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
        workOutStatus.setDate(LocalDate.now());

        workOutStatusRepository.save(workOutStatus);

        return modelMapper.map(workOutStatus,WorkOutStatusResponse.class);


    }

    @Override
    public List<WorkOutStatusResponse> getAllStatusById(Long id) throws UserNotFoundException {

        User user = userRepository.findById(id).orElseThrow(
                ()-> new UserNotFoundException("that user not in a database")
        );

        List<WorkOutStatus> workOutStatusList = workOutStatusRepository.findAllByUser(user);

        return workOutStatusList.stream()
                .map(workOutStatus ->  modelMapper.map(workOutStatus, WorkOutStatusResponse.class))
                .toList();

    }

    @Override
    public List<WorkOutStatusResponse> getAllStatus() {

        List<WorkOutStatus> workOutStatusList = workOutStatusRepository.findAll();
        return workOutStatusList.stream()
                .map(workOutStatus ->  modelMapper.map(workOutStatus, WorkOutStatusResponse.class))
                .toList();
    }

    @Override
    public void updateStatus(WorkOutStatusDTO workOutStatusDTO, Long id) throws NotFoundException {
        WorkOutStatus workOutStatus = workOutStatusRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Status Not Found!"));

        workOutStatus.setDuration(workOutStatusDTO.getDuration());
        workOutStatus.setDistance(workOutStatusDTO.getDistance());
        workOutStatus.setWeightLifted(workOutStatusDTO.getWeightLifted());
        workOutStatus.setCaloriesBurned(workOutStatusDTO.getCaloriesBurned());
        workOutStatus.setNumOfPushUps(workOutStatusDTO.getNumOfPushUps());
        workOutStatus.setLoadResistance(workOutStatusDTO.getLoadResistance());
        workOutStatus.setDescription(workOutStatusDTO.getDescription());

         workOutStatusRepository.save(workOutStatus);
    }

    @Override
    public void deleteStatus(Long id) throws NotFoundException {
        WorkOutStatus workOutStatus = workOutStatusRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Status Not Found!"));

        workOutStatusRepository.deleteById(workOutStatus.getId());
    }

    @Override
    public WorkOutStatusResponse getStatusByStatId(Long id) throws NotFoundException {
        WorkOutStatus workOutStatus = workOutStatusRepository.findById(id).orElseThrow(() -> new NotFoundException("Status Not Found!"));

        return modelMapper.map(workOutStatus, WorkOutStatusResponse.class);
    }
}
