import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddApplicantComponent} from './add-applicant/add-applicant.component';
import {ListApplicantsComponent} from './list-applicants/list-applicants.component';
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout"
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material";
import {CustomDateAdapter, CUSTOM_DATE_FORMATS} from "./adapters/CustomDateAdapter";
import {OEightPrefixDirective} from "./directives/OEightPrefixDirective";
import {ApplicantService} from "./rest/applicant.service";
import {AllApplicantsResolver} from "./resolvers/all.applicants.resolver";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        AddApplicantComponent,
        ListApplicantsComponent,
        OEightPrefixDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [{provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS}, ApplicantService, AllApplicantsResolver],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
