package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "work_out_status")
public class WorkOutStatus {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double duration;
    private Integer distance;
    private Double weightLifted;
    private Double caloriesBurned;
    private Integer numOfPushUps;
    private String loadResistance;
    private LocalDate date;
    private String description;

    @ManyToOne
    private User user;
}
