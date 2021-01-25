import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentCreateComponent } from './components/appointment/create/appointment-create.component';
import { AppointmentDetailComponent } from './components/appointment/detail/appointment-detail.component';
import { AppointmentListComponent } from './components/appointment/list/appointment-list.component';
import { DoctorCreateComponent } from './components/doctor/create/doctor-create.component';
import { DoctorDetailComponent } from './components/doctor/detail/doctor-detail.component';
import { DoctorListComponent } from './components/doctor/list/doctor-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/layouts/nav-layout/nav.component';
import { NonavComponent } from './components/layouts/nonav-layout/nonav.component';
import { LoginComponent } from './components/login/login.component';
import { PatientCreateComponent } from './components/patient/create/patient-create.component';
import { PatientDetailComponent } from './components/patient/detail/patient-detail.component';
import { PatientListComponent } from './components/patient/list/patient-list.component';


const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{
		path: '',
		component: NonavComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'home', component: HomeComponent }
		]
	},
	{
		path: '',
		component: NavComponent,
		children: [
			{ path: 'doctors', component: DoctorListComponent },
			{ path: 'doctors/create', component: DoctorCreateComponent },
			{ path: 'doctors/:id', component: DoctorDetailComponent },
			{ path: 'patients', component: PatientListComponent },
			{ path: 'patients/create', component: PatientCreateComponent },
			{ path: 'patients/:id', component: PatientDetailComponent },
			{ path: 'appointments', component: AppointmentListComponent },
			{ path: 'appointments/create', component: AppointmentCreateComponent },
			{ path: 'appointments/:id', component: AppointmentDetailComponent },
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
