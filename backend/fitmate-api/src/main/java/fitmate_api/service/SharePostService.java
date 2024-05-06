package fitmate_api.service;

import fitmate_api.DTO.SharePostDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface SharePostService {
    ResponseEntity<Object> sharePost(SharePostDTO sharePostDTO);
}
