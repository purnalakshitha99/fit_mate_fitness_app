package fitmate_api.response;

import lombok.Data;

import java.time.LocalDate;

@Data
public class WorkOutStatusResponse {


    private Long id;
    private String duration;
    private Integer distance;
    private Double weightLifted;
    private Double caloriesBurned;
    private Integer numOfPushUps;
    private Double loadResistance;
    private LocalDate date;
    private String description;
}
