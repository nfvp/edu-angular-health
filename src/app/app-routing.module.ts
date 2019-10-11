import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient/list/patient-list.component';
import { DoctorListComponent } from './doctor/list/doctor-list.component';
import { AppointmentListComponent } from './appointment/list/appointment-list.component';
import { PatientDetailComponent } from './patient/detail/patient-detail.component';
import { DoctorDetailComponent } from './doctor/detail/doctor-detail.component';
import { AppointmentDetailComponent } from './appointment/detail/appointment-detail.component';


const routes: Routes = [
  { path: 'doctors', component: DoctorListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'doctors/:id', component: DoctorDetailComponent },
  { path: 'patients/:id', component: PatientDetailComponent },
  { path: 'appointments/:id', component: AppointmentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
