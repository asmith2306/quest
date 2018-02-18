import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddApplicantComponent} from "./add-applicant/add-applicant.component";
import {ListApplicantsComponent} from "./list-applicants/list-applicants.component";
import {AllApplicantsResolver} from "./resolvers/all.applicants.resolver";

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'add-applicant',
        component: AddApplicantComponent,
    },
    {
        path: 'list-applicants',
        component: ListApplicantsComponent,
        resolve: {
            applicants: AllApplicantsResolver
        }
    },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: DashboardComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: false})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}