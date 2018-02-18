package com.alan.quest.test;

import com.alan.quest.entities.Applicant;
import com.alan.quest.services.ApplicantServiceImpl;
import java.lang.reflect.Field;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author asmith
 */
public class TestUtils {

    private static int APPLICANT_COUNT = 0;

    public static Date getDateFromString(String input) throws ParseException {
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        return dateFormat.parse(input);
    }

    public static Applicant createApplicant(String ppsn) throws ParseException {
        Applicant applicant = new Applicant();
        applicant.setName("Applicant_" + APPLICANT_COUNT++);
        applicant.setPps(ppsn);
        applicant.setDob(TestUtils.getDateFromString("23/06/1985"));
        applicant.setMobile("0871234567");
        return applicant;
    }

    /**
     * Injects an object (objecToSet) into the given instance by fieldName
     * 
     * @param instance
     * @param objectToSet
     * @param fieldName
     * @throws Exception 
     */
    public static void injectAutowire(Object instance, Object objectToSet, String fieldName) throws Exception {
        Class<?> clazz = instance.getClass();
        Field f = clazz.getDeclaredField(fieldName);
        f.setAccessible(true);
        f.set(instance, objectToSet);
    }

}
