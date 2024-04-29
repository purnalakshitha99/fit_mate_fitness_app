package fitmate_api.DTO;


import fitmate_api.model.User;
import lombok.Data;

@Data
public class PostDTO {

    private Long userId;
    private String content;
    private String userName;

}
