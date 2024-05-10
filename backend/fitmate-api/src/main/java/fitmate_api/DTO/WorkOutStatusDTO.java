package fitmate_api.DTO;

import lombok.Data;

import java.nio.DoubleBuffer;
import java.time.LocalDate;


@Data
public class WorkOutStatusDTO {

    private Double duration;
    private Integer distance;
    private Double weightLifted;
    private Double caloriesBurned;
    private Integer numOfPushUps;
    private String loadResistance;
    private LocalDate date;
    private String description;
}
