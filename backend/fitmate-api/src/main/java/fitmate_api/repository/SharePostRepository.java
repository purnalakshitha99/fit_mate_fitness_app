package fitmate_api.repository;

import fitmate_api.model.SharePost;
import fitmate_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SharePostRepository extends JpaRepository<SharePost, Long> {

    List<SharePost> findSharePostByUser(User user);
}
