package fitmate_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "WorkoutStatus")
public class WorkoutStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id")
    private Long Id;

    @OneToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @Column(name = "details", nullable = false)
    private String details;

}