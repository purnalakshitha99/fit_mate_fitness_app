package fitmate_api.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import javax.print.attribute.standard.Media;

public interface MediaRepository extends JpaRepository<Media, Long> {
}
