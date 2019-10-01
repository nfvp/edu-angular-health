import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';


const routes: Routes = [
  { path: 'doctors', component: DoctorListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'appointments', component: AppointmentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
