package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Media")
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "media_id")
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Column(name = "media_url")
    private String mediaUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "media_type")
    private MediaType mediaType;

    @Column(name = "description")
    private String description;

}