package com.example.blex;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String email;
    private String role; //For spring security (admin / user role). Benytte enum?

    @CreationTimestamp
    private LocalDateTime created;


    /*TODO: UNCOMMENT ONCE CLASSES CREATED
    @OneToMany(mappedBy = "user")
    private List<DocumentStars> documentStars;

    @OneToMany(mappedBy = "user")
    private List<DocumentViews> documentViews;

    @OneToMany(mappedBy = "user")
    private List<DocumentDownloads> documentDownloads;

    @OneToMany(mappedBy="user")
    private List<Document> documents;
    */




    public User() {
    }

    public User(String username, String password, String email, String role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }







    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
