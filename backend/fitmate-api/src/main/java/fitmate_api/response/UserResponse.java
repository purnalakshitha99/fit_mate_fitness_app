package fitmate_api.response;

import lombok.Builder;
import lombok.Data;

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
}
