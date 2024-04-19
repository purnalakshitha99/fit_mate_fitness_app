package fitmate_api.DTO;


import fitmate_api.model.Media;
import fitmate_api.model.PostType;
import fitmate_api.model.User;
import lombok.Data;

import java.util.List;

@Data
public class PostDTO {

    private User user;
    private PostType postType;
    private String content;
    private List<Media> mediaList;
}
