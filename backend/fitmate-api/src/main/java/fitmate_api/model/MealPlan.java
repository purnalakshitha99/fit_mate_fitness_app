package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;


@Data
@Entity
@Table(name = "meal_plans")
public class MealPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mealPlanType;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private String portionSizes;
    private LocalDate creationDate;
    private LocalTime creationTime;

    private String imagePath;




    @ManyToOne
    private User user;


}
