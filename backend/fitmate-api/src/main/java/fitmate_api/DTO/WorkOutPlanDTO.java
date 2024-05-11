package fitmate_api.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class WorkOutPlanDTO {

    private String routingName ;
    private String exerciseName;
    private Integer setsCount;
    private String repetitions;
    private Date date;
    private String place;
    private String description;
}
