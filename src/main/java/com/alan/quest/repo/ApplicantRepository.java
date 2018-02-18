package com.alan.quest.repo;

import com.alan.quest.entities.Applicant;
import org.springframework.data.repository.CrudRepository;

/**
 * @author asmith
 */
public interface ApplicantRepository extends CrudRepository<Applicant, String> {}
