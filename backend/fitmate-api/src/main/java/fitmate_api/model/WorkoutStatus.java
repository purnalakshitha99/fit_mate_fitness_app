package fitmate_api.model;


import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalTime;
import java.util.Date;
@Data
@Entity
@Table(name = "work_out_status")
public class WorkoutStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


    private String typeOfWorkout;
    private Date date;
    private LocalTime time;
    private Integer numberOfPushUp;
    private Integer weightLifted;
    private String duration;
    private String description;
    private Float distanceRan;


}
