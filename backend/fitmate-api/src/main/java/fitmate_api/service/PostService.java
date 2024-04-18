package fitmate_api.service;

import com.example.fitnesstest.DTO.PostDTO;
import com.example.fitnesstest.entity.Post;
import com.example.fitnesstest.response.PostResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostService {
    Post savePost(PostDTO postDTO);

    List<PostResponse> getAllPosts();

    PostResponse getPostById(Long id);

    void deletePost(Long id);
}
