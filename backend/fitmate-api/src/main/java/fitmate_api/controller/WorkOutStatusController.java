package fitmate_api.controller;


import fitmate_api.DTO.WorkOutStatusDTO;
import fitmate_api.exception.NotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.response.WorkOutStatusResponse;
import fitmate_api.service.WorkOutStatusService;
import lombok.AllArgsConstructor;
import org.apache.logging.log4j.util.PerformanceSensitive;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class WorkOutStatusController {

    private WorkOutStatusService workOutStatusService;

    @PostMapping("/users/status/{user_id}")
    public WorkOutStatusResponse create(@PathVariable("user_id")Long userId, @RequestBody WorkOutStatusDTO workOutStatusDTO)throws UserNotFoundException {

        return workOutStatusService.create(userId,workOutStatusDTO);

    }
    @GetMapping("/users/{user_id}")
    public List<WorkOutStatusResponse> getAllStatusById(@PathVariable ("user_id") Long id) throws UserNotFoundException {
        return workOutStatusService.getAllStatusById(id);
    }

    @GetMapping("/users/status/{stat_id}")
    public WorkOutStatusResponse getStatusByStatId(@PathVariable ("stat_id") Long id) throws NotFoundException {
        return workOutStatusService.getStatusByStatId(id);
    }

    @GetMapping("/users/status")
    public List<WorkOutStatusResponse> getAllStatus() throws UserNotFoundException {
        return workOutStatusService.getAllStatus();
    }

    @PutMapping("/users/status/{stat_id}")
    public ResponseEntity<String> updateStatus(@RequestBody WorkOutStatusDTO workOutStatusDTO, @PathVariable ("stat_id") Long id) throws NotFoundException {
        workOutStatusService.updateStatus(workOutStatusDTO,id);

        return new ResponseEntity<>("Status Update!", HttpStatus.CREATED);
    }

    @DeleteMapping("/users/status/{stat_id}")
    public ResponseEntity<String> deleteStatus( @PathVariable ("stat_id") Long id) throws NotFoundException {
        workOutStatusService.deleteStatus(id);

        return new ResponseEntity<>("Status Delete!", HttpStatus.CREATED);
    }
}
