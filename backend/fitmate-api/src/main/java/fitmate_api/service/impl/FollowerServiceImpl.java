package fitmate_api.service.impl;

import fitmate_api.model.User;
import fitmate_api.repository.NotificationRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.service.FollowerService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FollowerServiceImpl implements FollowerService {

    private UserRepository userRepository;
    private NotificationRepository notificationRepository;

        @Override
        public ResponseEntity<String> addFollower(Long uId, Long fId) {
            User logedInUser = userRepository.findById(uId).orElseThrow(
                    () -> new EntityNotFoundException("user not found")
            );

            User follower = userRepository.findById(fId).orElseThrow(
                    () -> new EntityNotFoundException("follower not found")
            );


            try {
                if (logedInUser.getFollowedUsers().contains(fId)){
                    logedInUser.getFollowedUsers().remove(fId);

//                follower.getFollower().remove(uId);
                    logedInUser.setFollowingCount(logedInUser.getFollowingCount()-1);
                    follower.setFollowersCount(follower.getFollowersCount()-1);
                    follower.getNotifications().remove("You Followed "+logedInUser.getUsername());
                    logedInUser.getNotifications().remove(follower.getUsername()+"Followed You");
//                    follower.getNotifications().removeAll(follower.getNotifications());
                    userRepository.save(logedInUser);
                    return new ResponseEntity<>("User UnFollowed Successfully! ", HttpStatus.OK);
                }

                logedInUser.getFollowedUsers().add(follower.getId());
                logedInUser.setFollowingCount(logedInUser.getFollowingCount()+1);
                follower.setFollowersCount(follower.getFollowersCount()+1);
                follower.getNotifications().add("You Followed "+logedInUser.getUsername());
                logedInUser.getNotifications().add(follower.getUsername()+"Followed You");

                userRepository.save(logedInUser);
                return new ResponseEntity<>("User Followed Successfully! ", HttpStatus.OK);
            }catch (Exception e){
                return new ResponseEntity<>("Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

