package fitmate_api.service.impl;

import fitmate_api.DTO.PostDTO;
import fitmate_api.model.User;
import fitmate_api.repository.UserRepository;
import fitmate_api.response.PostResponse;
import fitmate_api.model.Post;
import fitmate_api.repository.PostRepository;
import fitmate_api.service.PostService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class postServiceImpl implements PostService {

    private PostRepository postRepository;
    private UserRepository userRepository;
    private ModelMapper modelMapper;
    @Override
    public Post savePost(PostDTO postDTO, Long id) {

        User user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        Post post = new Post();
        post.setContent(postDTO.getContent());
        post.setUser(user);
        post.setPostImages(postDTO.getImageUrls());
        post.setCreatedAt(LocalTime.now());
        post.setVideoUrl(postDTO.getVideoUrl());

        return postRepository.save(post);
    }

    @Override
    public List<PostResponse> getAllPosts() {
        List<Post> postList = postRepository.findAll();
        List<PostResponse> postResponseList = new ArrayList<>();
        for (Post post : postList) {
            PostResponse response = modelMapper.map(post, PostResponse.class);
            postResponseList.add(response);
        }
        return postResponseList;
    }

    @Override
    public List<PostResponse> getPostById(Long id) {
        List<Post> postList = postRepository.findPostsByUserId(id);
        List<PostResponse> postResponseList = new ArrayList<>();
        for (Post post : postList) {
            PostResponse response = modelMapper.map(post, PostResponse.class);
            postResponseList.add(response);
        }
        return postResponseList;
    }

    @Override
    public void deletePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        postRepository.deleteById(post.getId());
    }


    @Override
    public ResponseEntity<String> setLikedUser(Long uId, Long pId) {

        User user = userRepository.findById(uId).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        Post post = postRepository.findById(pId).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        try {
            if (post.getLikedUsers().contains(uId)){
                post.getLikedUsers().remove(uId);
                post.setLikeCount(post.getLikeCount()-1);
                postRepository.save(post);
                return new ResponseEntity<>("Post Unliked Successfully! ", HttpStatus.OK);
            }
            post.getLikedUsers().add(uId);
            post.setLikeCount(post.getLikeCount()+1);
            postRepository.save(post);
            return new ResponseEntity<>("Post Liked Successfully! ", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @Override
    public ResponseEntity<Object> updatePost(PostDTO postDTO, Long id) {
        return null;
    }
}
