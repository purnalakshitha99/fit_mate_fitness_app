package fitmate_api.repository;

import fitmate_api.model.User;
import fitmate_api.model.WorkOutStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkOutStatusRepository extends JpaRepository<WorkOutStatus,Long> {

    List<WorkOutStatus> findAllByUser(User user);
}
