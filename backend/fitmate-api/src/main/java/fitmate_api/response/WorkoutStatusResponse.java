package fitmate_api.response;

import jdk.jshell.Snippet;
import lombok.Builder;
import lombok.Data;

import java.time.LocalTime;
import java.util.Date;

@Data
@Builder
public class WorkoutStatusResponse {
    private Long id;
    private String typeOfWorkout;
    private Date date;
    private LocalTime time;
    private Integer numberOfPushUp;
    private String duration;
    private String description;
    private Float distanceRan;

}
