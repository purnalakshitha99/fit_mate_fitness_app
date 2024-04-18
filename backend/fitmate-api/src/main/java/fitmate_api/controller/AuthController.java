package fitmate_api.controller;


import fitmate_api.DTO.UserDTO;
import fitmate_api.service.UserService;
import lombok.AllArgsConstructor;
import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

//@RestController
@AllArgsConstructor
@Controller
public class AuthController {

    private UserService userService;


    @GetMapping("/")
    public String home(@AuthenticationPrincipal OAuth2User principal) {
        System.out.println("/sample"+principal);
        return "redirect:http://localhost:3000/home";
    }


    @GetMapping("/api/user")
    @ResponseBody
    public ResponseEntity<Object> getUsername(@AuthenticationPrincipal OAuth2User principal) throws IOException {
        if (principal != null) {
            String name = principal.getAttribute("name");
            String email = principal.getAttribute("email");
            String picture = principal.getAttribute("picture");
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail(email);
            userDTO.setUsername(name);
            userDTO.setProfilePictureUrl(picture);
            userDTO.setSource("google");

            return userService.saveUser(userDTO);
        } else {
            return ResponseEntity.status(Response.SC_UNAUTHORIZED).build();
        }
    }
}