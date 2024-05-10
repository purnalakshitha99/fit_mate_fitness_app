package fitmate_api.repository;

import fitmate_api.model.MealPlan;
import fitmate_api.model.User;
import fitmate_api.response.MealPlanResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MealPlanRepository extends JpaRepository<MealPlan,Long> {

//    List<MealPlanResponse> findMealPlanByUser(User user);

//    List<MealPlan> findMealPlanByUserId(Long userId);

    List<MealPlan> findMealPlanByUser(User user);
}
