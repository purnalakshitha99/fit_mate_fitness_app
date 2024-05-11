package fitmate_api.response;

import lombok.Data;

import java.util.Date;

@Data
public class WorkOutPlanResponse {

    private Long id;
    private String routingName ;
    private String exerciseName;
    private Integer setsCount;
    private String repetitions;
    private String place;
    private String description;
    private Date date;
}
