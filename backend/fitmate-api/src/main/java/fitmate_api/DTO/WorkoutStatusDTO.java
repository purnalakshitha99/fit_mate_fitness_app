package fitmate_api.DTO;

import lombok.Data;

import java.time.LocalTime;
import java.util.Date;

@Data
public class WorkoutStatusDTO {
    private String typeOfWorkout;
    private Date date;
    private LocalTime time;
    private Integer numberOfPushUp;
}
