package fitmate_api.response;

import lombok.Data;

import java.time.LocalDate;

@Data
public class WorkOutStatusResponse {


    private Long id;
    private Double duration;
    private Integer distance;
    private Double weightLifted;
    private Double caloriesBurned;
    private Integer numOfPushUps;
    private String loadResistance;
    private LocalDate date;
    private String description;
}
