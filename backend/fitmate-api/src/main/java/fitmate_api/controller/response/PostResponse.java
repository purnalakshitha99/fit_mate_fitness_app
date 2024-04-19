package fitmate_api.controller.response;


import fitmate_api.model.Media;
import fitmate_api.model.PostType;
import fitmate_api.model.User;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
@Builder
public class PostResponse {
    private User user;
    private PostType postType;
    private String content;
    private Timestamp createdAt;
    private List<Media> mediaList;
}
