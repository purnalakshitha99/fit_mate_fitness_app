package fitmate_api.repository;



import fitmate_api.model.WorkoutStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutStatusRepository extends JpaRepository<WorkoutStatus, Long> {
}
