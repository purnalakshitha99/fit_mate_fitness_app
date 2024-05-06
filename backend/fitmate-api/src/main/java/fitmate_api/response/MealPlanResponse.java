package fitmate_api.response;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
//@Builder
public class MealPlanResponse {

    private Long id;

    private String mealPlanType;
    private String dietaryPreferences;
    private String recipes;
    private String nutritionalInformation;
    private String ingredients;
    private String portionSizes;
    private String cookingInstructions;
    private LocalDate creationDate;
    private LocalTime creationTime;
    private String imagePath;

    private Long userId;
}
