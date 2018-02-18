package com.alan.quest.services;

import com.alan.quest.entities.Applicant;
import org.springframework.http.ResponseEntity;

/**
 * @author asmith
 */
public interface ApplicantService {

    public ResponseEntity create(Applicant applicant);
    public ResponseEntity findAll();
    
}
