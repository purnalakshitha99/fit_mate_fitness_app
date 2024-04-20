package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "WorkoutPlans")
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String workOutGoals ;
    private Integer age ;
    private String gender;
    private Integer weight;
    private Integer height;
}