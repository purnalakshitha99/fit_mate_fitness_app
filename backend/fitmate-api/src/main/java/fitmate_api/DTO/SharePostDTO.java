package fitmate_api.DTO;

import lombok.Data;

@Data
public class SharePostDTO {

    private Long userId;
    private Long postId;
    private String content;
}
