package fitmate_api.service;

import com.example.fitnesstest.DTO.CommentDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {
    void createComment(CommentDTO commentDTO, Long uId, Long pId);

    List<CommentDTO> getAllComments();

    void updateComment(CommentDTO commentDTO, Long cId);

    void deleteComment(Long id);
}
