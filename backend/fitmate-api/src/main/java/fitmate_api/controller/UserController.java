package fitmate_api.controller;




import fitmate_api.DTO.UserDTO;
import fitmate_api.controller.response.UserResponse;
import fitmate_api.model.User;
import fitmate_api.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @PostMapping("/users")
    public ResponseEntity<Object> createUser(@RequestBody UserDTO userDTO) throws IOException {


        return userService.saveUser(userDTO);
    }


    @PostMapping("/users/{user_id}/follow/{follower_id}")
    public ResponseEntity<String> addFollowers(@PathVariable("user_id") Long uId, @PathVariable("follower_id")  Long fId) {
        userService.addFollower(uId,fId);
        return ResponseEntity.ok("Followed");
    }


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> userList = userService.getAllUsers();

        return ResponseEntity.ok(userList);
    }

    @GetMapping("/users/{user_id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable("user_id") Long id) {
        UserResponse userResponse = userService.getUserById(id);
        return ResponseEntity.ok(userResponse);
    }

    @PutMapping("/users/{user_id}")
    public ResponseEntity<?> updateUser(@ModelAttribute UserDTO userDTO,@RequestParam("image") MultipartFile file, @PathVariable("user_id") Long id) throws IOException {
        userService.updateUser(userDTO,file, id);
        return ResponseEntity.ok("User Updated!");
    }


    @DeleteMapping("/users/{user_id}")
    public ResponseEntity<?> deleteUser(@PathVariable("user_id") Long id) {
        userService.deleteUser(id);

        return ResponseEntity.ok("User Deleted!");
    }
}
