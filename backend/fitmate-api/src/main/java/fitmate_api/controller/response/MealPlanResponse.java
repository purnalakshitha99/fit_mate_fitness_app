package fitmate_api.controller.response;

import lombok.Builder;
import lombok.Data;

import java.util.Date;
@Data
@Builder
public class MealPlanResponse {

    private Long id;

    private String title;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private Integer portionSizes;
    private Date creationDate;
}
