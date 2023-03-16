package com.example.blex.entities.idkeyclasses;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class DocumentDownloadsKey implements Serializable {

    private Long user_id;
    private Long document_id;

    public DocumentDownloadsKey() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        DocumentDownloadsKey that = (DocumentDownloadsKey) o;

        if (!Objects.equals(user_id, that.user_id)) return false;
        return Objects.equals(document_id, that.document_id);
    }

    @Override
    public int hashCode() {
        int result = user_id != null ? user_id.hashCode() : 0;
        result = 31 * result + (document_id != null ? document_id.hashCode() : 0);
        return result;
    }
}