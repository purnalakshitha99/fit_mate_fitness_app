package fitmate_api.response;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalTime;
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
    private LocalDate creationDate;
    private LocalTime creationTime;

    private String imagePath;
}
