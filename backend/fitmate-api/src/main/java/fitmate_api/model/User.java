package fitmate_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String passwordHash;

    private String profilePictureUrl;

    private String phoneNumber;

    @ElementCollection
    @CollectionTable(name = "followed_user_id", joinColumns = @JoinColumn(name = "follower_id"))
    private List<Long> followedUsers = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "notifications_id", joinColumns = @JoinColumn(name = "user_id"))
    private List<String> notifications = new ArrayList<>();

    private String bio;

    private LocalTime accountCreated;

    private Integer followingCount = 0;

    private Integer followersCount = 0;

//    @OneToMany(mappedBy = "user")
//    private List<MealPlan> mealPlanList;



}
