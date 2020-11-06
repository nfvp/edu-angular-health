import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './components/patient/list/patient-list.component';
import { DoctorListComponent } from './components/doctor/list/doctor-list.component';
import { AppointmentListComponent } from './components/appointment/list/appointment-list.component';
import { PatientDetailComponent } from './components/patient/detail/patient-detail.component';
import { DoctorDetailComponent } from './components/doctor/detail/doctor-detail.component';
import { AppointmentDetailComponent } from './components/appointment/detail/appointment-detail.component';
import { DoctorCreateComponent } from './components/doctor/create/doctor-create.component';
import { PatientCreateComponent } from './components/patient/create/patient-create.component';
import { AppointmentCreateComponent } from './components/appointment/create/appointment-create.component';


const routes: Routes = [
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/create', component: DoctorCreateComponent },
  { path: 'doctors/:id', component: DoctorDetailComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/create', component: PatientCreateComponent },
  { path: 'patients/:id', component: PatientDetailComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/create', component: AppointmentCreateComponent },
  { path: 'appointments/:id', component: AppointmentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
