package com.alan.quest.services;

import com.alan.quest.entities.Applicant;
import com.alan.quest.repo.ApplicantRepository;
import com.alan.quest.test.TestUtils;
import com.alan.quest.validators.ApplicantValidator;
import java.lang.reflect.Field;
import java.text.ParseException;
import org.easymock.EasyMock;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.springframework.http.ResponseEntity;

/**
 * @author asmith
 */
public class ApplicantServiceImplTest {

    @Test
    public void testCreate() throws Exception {
        Applicant applicant = TestUtils.createApplicant("123");
        ApplicantServiceImpl instance = new ApplicantServiceImpl();

        ApplicantRepository appRepo = EasyMock.createStrictMock(ApplicantRepository.class);
        TestUtils.injectAutowire(instance, appRepo, "appRepo");
        ApplicantValidator appValidator = EasyMock.createStrictMock(ApplicantValidator.class);
        TestUtils.injectAutowire(instance, appValidator, "appValidator");

        EasyMock.expect(appValidator.applicantUnique(applicant)).andReturn(true);
        EasyMock.expect(appRepo.save(applicant)).andReturn(applicant);

        EasyMock.replay(appRepo, appValidator);

        ResponseEntity result = instance.create(applicant);

        EasyMock.verify(appRepo, appValidator);

        assertEquals(applicant, (Applicant) result.getBody());
    }

    @Test
    public void testCreate_PPSAlreadyAssigned() throws Exception {
        Applicant applicant = TestUtils.createApplicant("123");
        ApplicantServiceImpl instance = new ApplicantServiceImpl();

        ApplicantRepository appRepo = EasyMock.createStrictMock(ApplicantRepository.class);
        TestUtils.injectAutowire(instance, appRepo, "appRepo");
        ApplicantValidator appValidator = EasyMock.createStrictMock(ApplicantValidator.class);
        TestUtils.injectAutowire(instance, appValidator, "appValidator");

        EasyMock.expect(appValidator.applicantUnique(applicant)).andReturn(false); // pps not unique
        EasyMock.expect(appRepo.save(applicant)).andReturn(applicant);

        EasyMock.replay(appRepo, appValidator);

        ResponseEntity result = instance.create(applicant);

        EasyMock.verify(appValidator);
        EasyMock.verifyUnexpectedCalls(appRepo);

        assertEquals("PPS number is not unique", result.getBody());
    }

}
