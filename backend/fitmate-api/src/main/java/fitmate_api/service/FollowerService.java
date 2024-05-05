package fitmate_api.service;

import org.springframework.http.ResponseEntity;

public interface FollowerService {
    ResponseEntity<String> addFollower(Long uId, Long fId);
}
