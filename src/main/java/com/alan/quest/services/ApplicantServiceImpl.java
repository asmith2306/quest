package com.alan.quest.services;

import com.alan.quest.entities.Applicant;
import com.alan.quest.repo.ApplicantRepository;
import com.alan.quest.validators.ApplicantValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * @author asmith
 */
@Service
public class ApplicantServiceImpl implements ApplicantService {

    @Autowired
    private ApplicantRepository appRepo;

    @Autowired
    private ApplicantValidator appValidator;

    @Override
    public ResponseEntity create(Applicant applicant) {
        if (!appValidator.applicantUnique(applicant)) {
            return ResponseEntity.badRequest().body("PPS number is not unique");
        }

        return ResponseEntity.ok(appRepo.save(applicant));
    }

    @Override
    public ResponseEntity findAll() {
        return ResponseEntity.ok(this.appRepo.findAll());
    }

}
