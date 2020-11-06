import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './components/doctor/list/doctor-list.component';
import { PatientListComponent } from './components/patient/list/patient-list.component';
import { AppointmentListComponent } from './components/appointment/list/appointment-list.component';
import { DoctorDetailComponent } from './components/doctor/detail/doctor-detail.component';
import { PatientDetailComponent } from './components/patient/detail/patient-detail.component';
import { AppointmentDetailComponent } from './components/appointment/detail/appointment-detail.component';
import { DoctorCreateComponent } from './components/doctor/create/doctor-create.component';
import { PatientCreateComponent } from './components/patient/create/patient-create.component';
import { AppointmentCreateComponent } from './components/appointment/create/appointment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    AppointmentListComponent,
    DoctorDetailComponent,
    PatientDetailComponent,
    AppointmentDetailComponent,
    DoctorCreateComponent,
    PatientCreateComponent,
    AppointmentCreateComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
