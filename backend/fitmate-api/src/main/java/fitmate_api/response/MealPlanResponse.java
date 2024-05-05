package fitmate_api.response;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
//@Builder
public class MealPlanResponse {

    private Long id;

    private String mealPlanType;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private String portionSizes;
    private LocalDate creationDate;
    private LocalTime creationTime;



    private String imagePath;
    private Long userId;
}
