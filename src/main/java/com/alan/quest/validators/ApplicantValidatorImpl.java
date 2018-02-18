package com.alan.quest.validators;

import com.alan.quest.entities.Applicant;
import com.alan.quest.repo.ApplicantRepository;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author asmith
 */
@Component
public class ApplicantValidatorImpl implements ApplicantValidator {

    @Autowired
    private ApplicantRepository appRepo;

    @Override
    public boolean applicantUnique(Applicant applicant) {
        Iterator<Applicant> it = this.appRepo.findAll().iterator();
        while (it.hasNext()) {
            if (it.next().getPps().equals(applicant.getPps())) {
                return false;
            }
        }
        return true;
    }

}
