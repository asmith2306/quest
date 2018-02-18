package com.alan.quest.controllers;

import com.alan.quest.entities.Applicant;
import com.alan.quest.services.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author asmith
 */
@RestController
@RequestMapping(value="/applicants")
public class ApplicantController {

    @Autowired
    ApplicantService appService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity create(@RequestBody Applicant applicant) {
        return appService.create(applicant);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity findAll() {
        return appService.findAll();
    }

}
