package fitmate_api.DTO;

import lombok.Data;

@Data
public class SharePostDTO {

    private Long user_id;
    private Long post_id;
    private String content;
}
