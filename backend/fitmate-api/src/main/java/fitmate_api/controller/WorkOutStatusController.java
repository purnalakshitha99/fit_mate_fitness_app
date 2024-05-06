package fitmate_api.controller;


import fitmate_api.DTO.WorkOutStatusDTO;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.WorkOutStatusResponse;
import fitmate_api.service.WorkOutStatusService;
import lombok.AllArgsConstructor;
import org.apache.logging.log4j.util.PerformanceSensitive;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class WorkOutStatusController {

    private WorkOutStatusService workOutStatusService;

    @PostMapping("/users/{user_id}/work_out_statues")
    public WorkOutStatusResponse create(@PathVariable("user_id")Long userId, @RequestBody WorkOutStatusDTO workOutStatusDTO)throws UserNotFoundException {

        return workOutStatusService.create(userId,workOutStatusDTO);

    }
}
