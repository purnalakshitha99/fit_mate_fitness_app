package fitmate_api.service;


import fitmate_api.DTO.CommentDTO;
import fitmate_api.model.Comment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {
    void createComment(CommentDTO commentDTO, Long uId, Long pId);

    List<Comment> getAllComments();

    void updateComment(CommentDTO commentDTO, Long cId);

    void deleteComment(Long id);
}
