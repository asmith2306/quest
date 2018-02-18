import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Applicant} from "../models/applicant";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApplicantService {

    constructor(private httpClient: HttpClient) {}

    create(applicant: Applicant): Observable<Applicant> {
        return this.httpClient.post<Applicant>("/applicants/", applicant);
    }

    findAll(): Observable<Array<Applicant>> {
        return this.httpClient.get<Array<Applicant>>("/applicants/");
    }

}
