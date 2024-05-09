package fitmate_api.DTO;


import fitmate_api.model.User;
import lombok.Data;

import java.util.List;

@Data
public class PostDTO {

    private Long userId;
    private String content;
    private List<String> imageUrls;
    private String videoUrl;

}
