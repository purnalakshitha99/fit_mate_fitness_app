package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "meal_plans")


public class MealPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private Integer portionSizes;
    private Date creationDate;

    @ManyToOne
    private User user;
}
