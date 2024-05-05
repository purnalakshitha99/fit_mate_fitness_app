package fitmate_api.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;



@Data
public class MealPlanDTO {

    private String mealPlanType;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private String portionSizes;


    private MultipartFile imagePath;
}
