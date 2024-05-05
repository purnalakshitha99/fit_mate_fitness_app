package fitmate_api.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;



@Data
public class MealPlanDTO {

    private String title;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private Integer portionSizes;


    private MultipartFile imagePath;
}
