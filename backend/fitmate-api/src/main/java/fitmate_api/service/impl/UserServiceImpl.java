package fitmate_api.service.impl;



import fitmate_api.DTO.UserDTO;
import fitmate_api.controller.response.CommonResponse;
import fitmate_api.controller.response.UserResponse;
import fitmate_api.model.User;
import fitmate_api.repository.UserRepository;
import fitmate_api.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    public static String uploadDirecory = System.getProperty("user.dir") + "/src/main/images";

    @Override
    public ResponseEntity<Object> saveUser(UserDTO userDTO) throws IOException {
        if(userDTO.getSource() == null){
//meka liyn normal register senn eka
            User user = new User();
            user.setFirstName(userDTO.getFirstName());
            user.setLastName(userDTO.getLastName());
            user.setUsername(userDTO.getUsername());
            user.setPhoneNumber(userDTO.getPhoneNumber());
            user.setEmail(userDTO.getEmail());

            userRepository.save(user);

        }

        if(Objects.equals(userDTO.getSource(), "google")){
            String email = userDTO.getEmail();
            if(userRepository.existsByEmail(email)){
                User user = userRepository.findByEmail(email);
                //send user response
            }

            User googleUser = new User();
            googleUser.setUsername(userDTO.getUsername());
            googleUser.setEmail(userDTO.getEmail());
            googleUser.setProfilePictureUrl(userDTO.getProfilePictureUrl());
            try {
                userRepository.save(googleUser);
            }catch (DataIntegrityViolationException e){
                return new ResponseEntity<>("Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
//        Optional<User> userOptional = userRepository.findUserByEmail(userDTO.getEmail());
//        System.out.println(userDTO.getEmail());
//        if (!userOptional.isPresent()) {
//            User user = new User();
//
//            user.setFirstName(userDTO.getFirstName());
//            user.setLastName(userDTO.getLastName());
//            user.setUsername(userDTO.getUsername());
//            user.setEmail(userDTO.getEmail());
//            user.setPasswordHash(userDTO.getPassword());
//            user.setBio(userDTO.getBio());
//            user.setAccountCreated(LocalTime.now());
//
//            userRepository.save(user);
//
//            return ResponseEntity.ok(user);
//        }

        return null;

    }

    @Override
    public List<User> getAllUsers() {

        List<User> userList = userRepository.findAll();
        List<User> userResponseList = new ArrayList<>();


        for (User user : userList) {
            User user1 = new User();
            user1.setUserId(user.getUserId());
            user1.setFirstName(user.getFirstName());
            user1.setUsername(user.getUsername());

            userResponseList.add(user1);
        }
        return userResponseList;
    }

    @Override
    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        UserResponse userResponse = UserResponse.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .username(user.getUsername())
                .email(user.getEmail())
                .bio(user.getBio())
                .build();

        return userResponse;
    }


    @Override
    public void deleteUser(Long id) {
        userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found !")
        );
        userRepository.deleteById(id);
    }

    @Override
    public void updateUser(UserDTO userDTO,MultipartFile file, Long id) throws IOException {
        User user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setBio(userDTO.getBio());
        user.setUsername(userDTO.getUsername());

        String originalFilename = file.getOriginalFilename();
        Path fileNameAndPath = Paths.get(uploadDirecory, originalFilename);
        Files.write(fileNameAndPath, file.getBytes());
        user.setProfilePictureUrl(originalFilename);

        userRepository.save(user);
    }

    @Override
    public void addFollower(Long uId, Long fId) {
        User user = userRepository.findById(uId).orElseThrow(
                () -> new EntityNotFoundException("user not found")
        );

        User follower = userRepository.findById(fId).orElseThrow(
                () -> new EntityNotFoundException("Follower Not Found!")
        );

        user.getFollowers().add(follower);

        userRepository.save(user);
    }

    @Override
    public ResponseEntity<CommonResponse> registerUser(UserDTO userDTO) {

        User user = userRepository.findUserByEmail(userDTO.getEmail()).orElseThrow(
                () -> new EntityNotFoundException("User Alredy registered!")
        );
            user.setFirstName(userDTO.getFirstName());
            user.setLastName(userDTO.getLastName());
            user.setUsername(userDTO.getUsername());
            user.setEmail(userDTO.getEmail());
            user.setPasswordHash(userDTO.getPassword());
            user.setBio(userDTO.getBio());
            user.setAccountCreated(LocalTime.now());

            userRepository.save(user);

            CommonResponse commonResponse = new CommonResponse("Registered!");

return ResponseEntity.ok(commonResponse);

    }

}
