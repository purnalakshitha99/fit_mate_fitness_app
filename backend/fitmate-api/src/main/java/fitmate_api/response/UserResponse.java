package fitmate_api.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class UserResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String phoneNumber;
    private String bio;
    private String profilePictureUrl;
    private Integer followingCount;
    private Integer followersCount;
    private List<String> notifications;
}
