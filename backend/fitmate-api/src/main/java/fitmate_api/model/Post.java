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
    @Column(name = "post_id")
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "username")
    private String username;

    @Column(name = "content")
    private String content;

    @Column(name = "created_at")
    private LocalTime createdAt;

    @ElementCollection
    @CollectionTable(name = "post_liked_by_user_ids", joinColumns = @JoinColumn(name = "post_id"))
    @Column(name = "liked_by_user_id")
    private List<Long> likedUsers = new ArrayList<>();

    @Column(name = "like_count")
    private Integer likeCount = 0;

    @ElementCollection
    @CollectionTable(name = "post_images", joinColumns = @JoinColumn(name = "post_id"))
    @Column(name = "image")
    private List<Long> postImages = new ArrayList<>();

    @Column(name = "video")
    private String video;
}