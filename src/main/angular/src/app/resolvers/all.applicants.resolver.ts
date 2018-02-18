import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Applicant} from "../models/applicant";
import {ApplicantService} from "../rest/applicant.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AllApplicantsResolver implements Resolve<Array<Applicant>> {

    constructor(private applicantService: ApplicantService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Applicant>> {
        return this.applicantService.findAll();
    }

}