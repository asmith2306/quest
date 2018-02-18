package com.alan.quest.validators;

import com.alan.quest.entities.Applicant;
import com.alan.quest.repo.ApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Alan
 */
public interface ApplicantValidator {

    public boolean applicantUnique(Applicant applicant);

}
