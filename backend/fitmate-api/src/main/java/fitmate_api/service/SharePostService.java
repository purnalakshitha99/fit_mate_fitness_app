package fitmate_api.service;

import fitmate_api.DTO.SharePostDTO;
import fitmate_api.model.SharePost;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SharePostService {
    ResponseEntity<Object> sharePost(SharePostDTO sharePostDTO);

    List<SharePost> getAll();

    List<SharePost> getByUserId(Long id);
}
