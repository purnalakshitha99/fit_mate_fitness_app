package fitmate_api.controller;

import fitmate_api.DTO.SharePostDTO;
import fitmate_api.model.SharePost;
import fitmate_api.service.SharePostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class SharePostController {

    private SharePostService sharePostService;

    @PostMapping("/share")
    public ResponseEntity<Object> sharePost(@RequestBody SharePostDTO sharePostDTO){

        return sharePostService.sharePost(sharePostDTO);
    }

    @GetMapping("/share")
    public List<SharePost> getAllSharedPosts(){
        return sharePostService.getAll();
    }

    @GetMapping("/share/{user_id}")
    public  List<SharePost> getSharedPostById(@PathVariable ("user_id") Long id){
        return sharePostService.getByUserId(id);
    }
}
