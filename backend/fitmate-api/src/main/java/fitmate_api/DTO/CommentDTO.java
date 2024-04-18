package fitmate_api.DTO;

import lombok.Data;

import java.time.LocalTime;

@Data
public class CommentDTO {

    private Long commentId;
    private Long postId;
    private Long userId;
    private String commentText;
    private LocalTime createdAt;
}
