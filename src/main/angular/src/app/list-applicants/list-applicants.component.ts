import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Applicant} from "../models/applicant";
import {MatTableDataSource, MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-list-applicants',
    templateUrl: './list-applicants.component.html',
    styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit, OnDestroy {

    applicants: Array<Applicant>
    displayedColumns = ['name', 'pps', 'dob', 'mobile'];
    dataSource: MatTableDataSource<Applicant>;
    showTable = true;

    constructor(activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
        this.applicants = activatedRoute.snapshot.data["applicants"];

        if (this.applicants.length == 0) {
            this.showTable = false;
            this.snackBar.open("No records have been created");
        } else {
            this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
        }
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.snackBar.dismiss();
    }

}
