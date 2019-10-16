import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor/list/doctor-list.component';
import { PatientListComponent } from './patient/list/patient-list.component';
import { AppointmentListComponent } from './appointment/list/appointment-list.component';
import { DoctorDetailComponent } from './doctor/detail/doctor-detail.component';
import { PatientDetailComponent } from './patient/detail/patient-detail.component';
import { AppointmentDetailComponent } from './appointment/detail/appointment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    AppointmentListComponent,
    DoctorDetailComponent,
    PatientDetailComponent,
    AppointmentDetailComponent
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
