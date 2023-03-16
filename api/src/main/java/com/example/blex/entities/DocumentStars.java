package com.example.blex.entities;

import com.example.blex.entities.idkeyclasses.DocumentStarsKey;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class DocumentStars {

    @EmbeddedId
    private DocumentStarsKey documentStarsKey;
    private Integer stars;

    @ManyToOne
    @JoinColumn(name="document_id", insertable=false, updatable=false)
    private Document document;

    @ManyToOne
    @JoinColumn (name="user_id", insertable=false, updatable=false)
    private User user;

    public DocumentStars() {
    }
}