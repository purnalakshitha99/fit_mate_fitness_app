package fitmate_api.controller;



import fitmate_api.DTO.PostDTO;
import fitmate_api.response.CommonResponse;
import fitmate_api.response.PostResponse;
import fitmate_api.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class PostController {
    private PostService postService;

    @PostMapping("/posts/{user_id}")
    public ResponseEntity<CommonResponse> createUser(@RequestBody PostDTO postDTO, @PathVariable ("user_id")Long id)  {

        postService.savePost(postDTO, id);
        return ResponseEntity.ok(new CommonResponse("User Created"));
    }

    @GetMapping("/posts")
    public ResponseEntity<List<PostResponse>> getAllUsers() {
        List<PostResponse> postList = postService.getAllPosts();

        return ResponseEntity.ok(postList);
    }

    @GetMapping("/posts/{post_id}")
    public ResponseEntity<PostResponse> getUserById(@PathVariable("post_id") Long id){
        PostResponse postResponse = postService.getPostById(id);
        return ResponseEntity.ok(postResponse);
    }

    @DeleteMapping("/posts/{post_id}")
    public ResponseEntity<?> deleteUser(@PathVariable ("post_id") Long id){
        postService.deletePost(id);

        return ResponseEntity.ok("User Deleted!");
    }

    @PostMapping("/posts/user/{user_id}/post/{post_id}")
    public ResponseEntity<String> setLike(@PathVariable ("user_id") Long uId, @PathVariable ("post_id") Long pId){
        return postService.setLikedUser(uId, pId);

    }
}
