package fitmate_api.repository;

import fitmate_api.model.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealPlanRepository extends JpaRepository<MealPlan,Long> {
}
