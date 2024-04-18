package fitmate_api.DTO;

import com.example.fitnesstest.entity.Media;
import com.example.fitnesstest.entity.PostType;
import com.example.fitnesstest.entity.User;
import lombok.Data;

import java.util.List;

@Data
public class PostDTO {

    private User user;
    private PostType postType;
    private String content;
    private List<Media> mediaList;
}
