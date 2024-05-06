package fitmate_api.service.impl;


import fitmate_api.DTO.CommentDTO;
import fitmate_api.model.Comment;
import fitmate_api.model.Post;
import fitmate_api.model.User;
import fitmate_api.repository.CommentRepository;
import fitmate_api.repository.PostRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.service.CommentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;
    private UserRepository userRepository;

    private PostRepository postRepository;

    @Override
    public void createComment(CommentDTO commentDTO, Long uId, Long pId) {

        User user = userRepository.findById(uId)
                .orElseThrow(() -> new EntityNotFoundException("User Not Found" + uId));

        Post post = postRepository.findById(pId)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found!"));


        Comment comment = new Comment();
        comment.setCommentText(commentDTO.getCommentText());
        comment.setUser(user);
        comment.setPost(post);

        commentRepository.save(comment);

    }

    @Override
    public List<Comment> getAllComments() {

        //        List<CommentDTO> commentDTOList = new ArrayList<>();
//
//        for (Comment comment : commentList
//        ) {
//            CommentDTO commentDTO = new CommentDTO();
//            commentDTO.setCommentText(comment.getCommentText());
//            commentDTO.setUserId(comment.getUser().getId());
//            commentDTO.setPostId(comment.getPost().getId());
//            commentDTO.setCreatedAt(comment.getCreatedAt());
//
//            commentDTOList.add(commentDTO);
//        }

        return commentRepository.findAll();
    }

    @Override
    public void updateComment(CommentDTO commentDTO, Long cId) {

        Comment comment = commentRepository.findById(cId)
                .orElseThrow(() -> new EntityNotFoundException("Comment not found!"));

        comment.setCommentText(commentDTO.getCommentText());

        commentRepository.save(comment);


    }

    @Override
    public void deleteComment(Long id) {
        commentRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("Comment Not Found !")
        );
        commentRepository.deleteById(id);
    }


}
