package fitmate_api.service.impl;

import fitmate_api.DTO.SharePostDTO;
import fitmate_api.model.Post;
import fitmate_api.model.SharePost;
import fitmate_api.model.User;
import fitmate_api.repository.PostRepository;
import fitmate_api.repository.SharePostRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.service.SharePostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SharePostImpl implements SharePostService {

    private UserRepository userRepository;
    private PostRepository postRepository;
    private SharePostRepository sharePostRepository;
    @Override
    public ResponseEntity<Object> sharePost(SharePostDTO sharePostDTO) {

        User user = userRepository.findById(sharePostDTO.getUserId()).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        Post post = postRepository.findById(sharePostDTO.getPostId()).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        SharePost sharePost = new SharePost();
        sharePost.setUser(user);
        sharePost.setPost(post);
        sharePost.setContent(sharePostDTO.getContent());

        return new ResponseEntity<>(sharePostRepository.save(sharePost), HttpStatus.CREATED);
    }

    @Override
    public List<SharePost> getAll() {

        return sharePostRepository.findAll();
    }

    @Override
    public List<SharePost> getByUserId(Long id) {

        User user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        return sharePostRepository.findSharePostByUser(user);
    }
}
