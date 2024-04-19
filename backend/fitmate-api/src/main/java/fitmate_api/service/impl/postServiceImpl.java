package fitmate_api.service.impl;

import fitmate_api.DTO.PostDTO;
import fitmate_api.response.PostResponse;
import fitmate_api.model.Post;
import fitmate_api.repository.PostRepository;
import fitmate_api.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class postServiceImpl implements PostService {

    private PostRepository postRepository;
    @Override
    public Post savePost(PostDTO postDTO) {

        Post post = new Post();
        post.setPostType(postDTO.getPostType());
        post.setContent(postDTO.getContent());
        post.setCreatedAt(LocalTime.now());

        return postRepository.save(post);
    }

    @Override
    public List<PostResponse> getAllPosts() {
        List<Post> postList = postRepository.findAll();
        List<PostResponse> postResponseList = new ArrayList<>();
        for (Post post : postList) {
            PostResponse response = PostResponse.builder()
                    .postType(post.getPostType())
                    .content(post.getContent())
                    .user(post.getUser())
                    .mediaList(post.getMediaList())
                    .build();
            postResponseList.add(response);
        }
        return postResponseList;
    }

    @Override
    public PostResponse getPostById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        PostResponse postResponse = PostResponse.builder()
                .postType(post.getPostType())
                .mediaList(post.getMediaList())
                .user(post.getUser())
                .content(post.getContent())
                .build();

        return  postResponse;
    }

    @Override
    public void deletePost(Long id) {

    }
}
