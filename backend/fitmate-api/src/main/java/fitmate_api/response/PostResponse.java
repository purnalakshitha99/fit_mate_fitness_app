package fitmate_api.response;


import fitmate_api.model.User;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.JoinColumn;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class PostResponse {

    private Long postId;
    private User user;

    private String username;

    private String content;

    private LocalTime createdAt;

    private List<Long> likedUsers ;

    private Integer likeCount = 0;

    private List<String> postImages;

    private String videoUrl;

}
