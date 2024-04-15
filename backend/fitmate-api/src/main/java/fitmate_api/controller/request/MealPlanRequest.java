package fitmate_api.controller.request;

import lombok.Data;

import java.util.Date;

@Data
public class MealPlanRequest {

    private String title;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private Integer portionSizes;
    private Date creationDate;
}
