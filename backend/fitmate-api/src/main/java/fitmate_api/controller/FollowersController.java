package fitmate_api.controller;

import fitmate_api.service.FollowerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class FollowersController {

    private FollowerService followerService;

    @PostMapping("/users/{user_id}/follow/{follower_id}")
    public ResponseEntity<String> addFollowers(@PathVariable("user_id") Long uId, @PathVariable("follower_id") Long fId) {
        return followerService.addFollower(uId, fId);
    }

}
