package fitmate_api.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private Long notificationId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "notification_type", nullable = false)
    private NotificationType notificationType;

    @Column(name = "origin_id", nullable = false)
    private Long originId;

    @Column(name = "message")
    private String message;

    @Column(name = "seen")
    private Boolean seen;

    @Column(name = "created_at")
    private Timestamp createdAt;

}