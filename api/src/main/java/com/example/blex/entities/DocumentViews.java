package com.example.blex.entities;

import com.example.blex.entities.Document;
import com.example.blex.entities.User;
import com.example.blex.entities.idkeyclasses.DocumentViewsKey;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class DocumentViews {

    @EmbeddedId
    private DocumentViewsKey documentViewsKey;

    @ManyToOne
    @JoinColumn(name="document_id", insertable=false, updatable=false)
    private Document document;

    @ManyToOne
    @JoinColumn (name="user_id", insertable=false, updatable=false)
    private User user;

    public DocumentViews() {
    }
}