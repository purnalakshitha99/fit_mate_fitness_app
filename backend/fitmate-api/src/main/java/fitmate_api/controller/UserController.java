package fitmate_api.controller;




import fitmate_api.DTO.LoginDTO;
import fitmate_api.DTO.UserDTO;
import fitmate_api.response.UserResponse;
import fitmate_api.model.User;
import fitmate_api.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@Controller
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @PostMapping("/users")
    public ResponseEntity<Object> createUser(@RequestBody UserDTO userDTO) throws IOException {
        return userService.saveUser(userDTO);
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
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO, @PathVariable("user_id") Long id) throws IOException {
        userService.updateUser(userDTO, id);
        return ResponseEntity.ok("User Updated!");
    }


    @DeleteMapping("/users/{user_id}")
    public ResponseEntity<?> deleteUser(@PathVariable("user_id") Long id) {
        userService.deleteUser(id);

        return ResponseEntity.ok("User Deleted!");
    }


    @PostMapping("/users/login")
    public ResponseEntity<Object> loginUser(@RequestBody LoginDTO loginDTO){


        return  userService.loginUser(loginDTO);
    }

    @DeleteMapping("/users/notifications/{user_id}")
    public ResponseEntity<String> clearNotifications(@PathVariable ("user_id")Long id){
        userService.clearNotifications(id);

        return new ResponseEntity<>("Notification cleared!", HttpStatus.OK);
    }
}
