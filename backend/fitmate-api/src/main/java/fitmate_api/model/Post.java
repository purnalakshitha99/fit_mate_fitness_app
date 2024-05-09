package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "Posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String content;

    private LocalTime createdAt;

    @ElementCollection
    @CollectionTable(name = "post_liked_by_user_ids", joinColumns = @JoinColumn(name = "post_id"))
    private List<Long> likedUsers = new ArrayList<>();

    private Integer likeCount = 0;

    @ElementCollection
    @CollectionTable(name = "post_images", joinColumns = @JoinColumn(name = "post_id"))
    private List<String> postImages;

    private String videoUrl;
}