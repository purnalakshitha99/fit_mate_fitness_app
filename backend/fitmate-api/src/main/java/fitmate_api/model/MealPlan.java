package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@Table(name = "MealPlans")
public class MealPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_plan_id")
    private Long mealPlanId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "meal_name")
    private String mealName;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "nutritional_info", columnDefinition = "TEXT")
    private String nutritionalInfo;

    @Column(name = "created_at")
    private Timestamp createdAt;

    @Column(name = "updated_at")
    private Timestamp updatedAt;

    // Mapping for multiple ingredients
    @ElementCollection
    @CollectionTable(name = "MealPlan_Ingredients", joinColumns = @JoinColumn(name = "meal_plan_id"))
    @Column(name = "ingredient")
    private List<String> ingredients;
}
