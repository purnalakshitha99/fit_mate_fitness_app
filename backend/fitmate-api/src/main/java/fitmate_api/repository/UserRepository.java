package fitmate_api.repository;


import fitmate_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsername(String name);

    @Query("FROM User u WHERE u.firstName LIKE CONCAT('%', :name, '%')")
    List<User> findByname(@Param("name") String name);

    Optional<User> findUserByEmail(String email);

    User findByEmail(String email);
    boolean existsByEmail(String email);

}
