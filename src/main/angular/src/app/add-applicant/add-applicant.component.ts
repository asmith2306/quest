import {Component, OnInit} from '@angular/core';
import {Applicant} from "../models/applicant";
import {Router} from "@angular/router";
import {ApplicantService} from "../rest/applicant.service";
import {MatSnackBar} from "@angular/material";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-add-applicant',
    templateUrl: './add-applicant.component.html',
    styleUrls: ['./add-applicant.component.scss']
})
export class AddApplicantComponent implements OnInit {

    applicant: Applicant = new Applicant();
    maxDate: Date;
    selectedDate: Date;

    constructor(private router: Router, private applicantService: ApplicantService,
        private snackBar: MatSnackBar) {}

    ngOnInit() {
        this.doMaxDate();
    }

    toRoute(url: string) {
        this.router.navigate([url]);
    }

    private doMaxDate() {
        let current = new Date();
        current.setFullYear(current.getFullYear() - 16);
        this.maxDate = current;
    }

    onSubmit() {
        this.applicant.dob = this.selectedDate.getDate() + "/"
            + (this.selectedDate.getMonth() + 1) + "/"
            + this.selectedDate.getFullYear();
        console.log(this.applicant)

        this.applicantService.create(this.applicant).subscribe(res => {
            this.toRoute("dashboard")
            this.snackBar.open("Application submitted", null, {duration: 2000});
        }, (err: HttpErrorResponse) => {
            console.error(err)
            this.snackBar.open("Error adding applicant: " + err.error, null, {duration: 4000});
        });
        ;
    }

}
