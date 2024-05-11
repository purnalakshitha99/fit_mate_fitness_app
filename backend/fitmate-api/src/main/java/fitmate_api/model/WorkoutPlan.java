package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "Workout_plans")
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String routingName ;
    private String exerciseName;
    private Integer setsCount;
    private String repetitions;
    private String place;
    private String description;
    private Date date;

    @ManyToOne
    private User user;
}