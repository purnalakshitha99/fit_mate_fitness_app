package fitmate_api.controller;

import fitmate_api.DTO.SharePostDTO;
import fitmate_api.service.SharePostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class SharePostController {

    private SharePostService sharePostService;

    @PostMapping("/share")
    public ResponseEntity<Object> sharePost(@RequestBody SharePostDTO sharePostDTO){

        return sharePostService.sharePost(sharePostDTO);

    }
}
