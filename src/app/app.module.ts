import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
		AppointmentCreateComponent,
		AppointmentDetailComponent,
		AppointmentListComponent,
		DoctorCreateComponent,
		DoctorDetailComponent,
		DoctorListComponent,
		PatientCreateComponent,
		PatientDetailComponent,
		PatientListComponent,
		LoginComponent,
		HomeComponent,
		NonavComponent,
		NavComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatGridListModule,
		FontAwesomeModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt-PT' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
