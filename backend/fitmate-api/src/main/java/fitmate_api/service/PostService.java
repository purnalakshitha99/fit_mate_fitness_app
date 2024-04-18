package fitmate_api.service;

import fitmate_api.DTO.PostDTO;
import fitmate_api.controller.response.PostResponse;
import fitmate_api.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostService {
    Post savePost(PostDTO postDTO);

    List<PostResponse> getAllPosts();

    PostResponse getPostById(Long id);

    void deletePost(Long id);
}
