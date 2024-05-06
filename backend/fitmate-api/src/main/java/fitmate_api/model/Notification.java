package fitmate_api.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    private User user;

    @Enumerated(EnumType.STRING)
    private NotificationType notificationType;

    private Long originId;

    private String message;

    private Boolean seen;

    private Timestamp createdAt;

}