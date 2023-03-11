package com.example.blex.entities;
import org.hibernate.annotations.CreationTimestamp;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String filename;
    private String artist;
    private String songtitle;
    private String type; //type blekke, ikke type fil (vi vil vel uansett bare tillate pdf foreløpig?)

    @CreationTimestamp
    private LocalDateTime uploaded;

    @OneToMany(mappedBy = "document")
    private List<DocumentStars> documentStars;

    @OneToMany(mappedBy = "document")
    private List<DocumentViews> documentViews;

    @OneToMany(mappedBy = "user")
    private List<DocumentDownloads> documentDownloads;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Document() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getSongtitle() {
        return songtitle;
    }

    public void setSongtitle(String songtitle) {
        this.songtitle = songtitle;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getUploaded() {
        return uploaded;
    }

    public void setUploaded(LocalDateTime uploaded) {
        this.uploaded = uploaded;
    }
}