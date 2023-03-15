package com.example.blex.controllers;

import com.example.blex.entities.Document;
import com.example.blex.exceptions.ResourceNotFoundException;
import com.example.blex.repositories.DocumentRepository;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
public class DocumentController {
    private final DocumentRepository documentRepository;
    private final String UPLOAD_FOLDER;

    public DocumentController(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
        UPLOAD_FOLDER = "home/sifter/files/";
    }

    @PostMapping("/document/upload")
    public Document uploadDocument(@RequestBody MultipartFile file,
                                   @RequestParam(defaultValue = "") String song,
                                   @RequestParam(defaultValue = "") String artist,
                                   @RequestParam(defaultValue = "") String type) throws IOException {

        Document document = new Document();
        document.setSongtitle(song);
        document.setArtist(artist);
        document.setType(type);
        document.setFilename(file.getOriginalFilename());
        documentRepository.save(document);

        final String newFilename = document.getId().toString()+".pdf";
        System.out.println(UPLOAD_FOLDER + newFilename );
        File dest = new File(UPLOAD_FOLDER+newFilename);
        file.transferTo(dest);

        return document;
    }

    @GetMapping("/document/{id}")
    public ResponseEntity<Document> getDocument(@PathVariable(value = "id") Long id) {
        Document document = this.documentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found"));
        return ResponseEntity.ok().body(document);
    }

    @GetMapping("/document")
    public ResponseEntity<List<Document>> getAllDocuments() {
        List<Document> documents = this.documentRepository.findAll();
        return ResponseEntity.ok().body(documents);
    }

    @GetMapping("/document/download/{id}")
    public ResponseEntity<InputStreamResource> downloadDocument(@PathVariable(value = "id") Long id) throws FileNotFoundException {
        Document document = documentRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("File not found!"));

        String originalFilename = document.getFilename();
        File file = new File(UPLOAD_FOLDER + document.getId() + ".pdf");
        //TODO: name file with song title and artist, if that data is available, if not, use originalFilename
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + originalFilename)
                .contentType(MediaType.APPLICATION_PDF)
                .contentLength(file.length())
                .body(resource);
    }
}
