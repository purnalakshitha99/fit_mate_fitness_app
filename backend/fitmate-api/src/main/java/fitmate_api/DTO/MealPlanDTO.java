package fitmate_api.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalTime;


@Data
public class MealPlanDTO {

    private String mealPlanType;
    private String dietaryPreferences;
    private String recipes;
    private String nutritionalInformation;
    private String ingredients;
    private String portionSizes;
    private String cookingInstructions;

    private MultipartFile imagePath;



}
