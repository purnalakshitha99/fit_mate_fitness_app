package fitmate_api.controller.response;

import com.example.fitnesstest.entity.Media;
import com.example.fitnesstest.entity.PostType;
import com.example.fitnesstest.entity.User;
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
