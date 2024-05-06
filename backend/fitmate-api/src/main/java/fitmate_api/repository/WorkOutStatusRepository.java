package fitmate_api.repository;

import fitmate_api.model.WorkOutStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkOutStatusRepository extends JpaRepository<WorkOutStatus,Long> {
}
