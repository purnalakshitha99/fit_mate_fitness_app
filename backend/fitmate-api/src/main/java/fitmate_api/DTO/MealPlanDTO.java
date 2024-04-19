package fitmate_api.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class MealPlanDTO {

    private String title;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private Integer portionSizes;
    private Date creationDate;
}
