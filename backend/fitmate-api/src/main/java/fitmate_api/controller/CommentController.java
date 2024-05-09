package fitmate_api.controller;


import fitmate_api.DTO.CommentDTO;
import fitmate_api.model.Comment;
import fitmate_api.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/comments")
public class CommentController {

    private CommentService commentService;

    @PostMapping("/{user_id}/post/{post_id}")
    public ResponseEntity<String> createComment(@RequestBody CommentDTO commentDTO, @PathVariable("user_id") Long uId, @PathVariable ("post_id") Long pId) {
        commentService.createComment(commentDTO,uId,pId);
        return ResponseEntity.status(HttpStatus.CREATED).body("Comment created successfully");
    }

    @GetMapping("/")
    public ResponseEntity<List<Comment>> getAllComment() {
        List<Comment> commentDTOList = commentService.getAllComments();

        return ResponseEntity.ok(commentDTOList);
    }

    @PutMapping("/{com_id}")
    public ResponseEntity<?> updateComment(@RequestBody CommentDTO commentDTO, @PathVariable ("com_id") Long cId) throws IOException {
        commentService.updateComment(commentDTO,cId);
        return ResponseEntity.ok("Comment Updated!");
    }

    @DeleteMapping("/users/{com_id}")
    public ResponseEntity<?> deleteComment(@PathVariable("com_id") Long id) {
        commentService.deleteComment(id);

        return ResponseEntity.ok("Comment Deleted!");
    }


}
