package fitmate_api.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Date;

@Data
public class MealPlanDTO {

    private String title;
    private String description;
    private String recipes;
    private String nutritional;
    private String information;
    private Integer portionSizes;
    private LocalDate creationDate;

    private MultipartFile imagePath;
}
