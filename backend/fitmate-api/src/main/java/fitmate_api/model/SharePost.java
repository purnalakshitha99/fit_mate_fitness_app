package fitmate_api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "share_post")
public class SharePost {

    @Id
    private Long id;
    @ManyToOne
    private User use;
    @ManyToOne
    private Post post;
    private String content;

}
