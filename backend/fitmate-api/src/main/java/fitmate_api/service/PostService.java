package fitmate_api.service;

import fitmate_api.DTO.PostDTO;
import fitmate_api.response.PostResponse;
import fitmate_api.model.Post;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostService {
    Post savePost(PostDTO postDTO, Long id);

    List<PostResponse> getAllPosts();

    List<PostResponse> getPostById(Long id);

    void deletePost(Long id);

    ResponseEntity<String> setLikedUser(Long uId, Long pId);

    ResponseEntity<Object> updatePost(PostDTO postDTO, Long id);
}
