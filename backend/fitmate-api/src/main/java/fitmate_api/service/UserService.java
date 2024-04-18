package fitmate_api.service;


import fitmate_api.DTO.UserDTO;
import fitmate_api.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface UserService {
    ResponseEntity<Object> saveUser(UserDTO userDTO) throws IOException;

    List<User> getAllUsers();

    UserResponse getUserById(Long id);

    void deleteUser(Long id);

    void updateUser(UserDTO userDTO,MultipartFile file, Long id) throws IOException;

    void addFollower(Long uId, Long fId);

    ResponseEntity<CommonResponse> registerUser(UserDTO userDTO);
}
