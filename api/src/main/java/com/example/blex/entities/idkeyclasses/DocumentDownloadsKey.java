package com.example.blex.entities.idkeyclasses;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class DocumentDownloadsKey implements Serializable {

    private Long user_id;
    private Long document_id;

    public DocumentDownloadsKey() {
    }

}
