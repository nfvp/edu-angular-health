import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Appointment } from '../../../entities/appointment';
import { Patient } from '../../../entities/patient';
import { Doctor } from '../../../entities/doctor';
import { AppointmentService } from '../../../services/appointment.service';
import { DoctorService } from '../../../services/doctor.service';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent {

  id: string;
  appointment: Appointment;
  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(appointmentService: AppointmentService, doctorService: DoctorService, patientService: PatientService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");

    appointmentService.getAppointment(this.id).subscribe(
      (res: Appointment) => {
        this.appointment = res;
      });
    doctorService.getDoctorList().subscribe(
      (res: Doctor[]) => {
        this.doctors = res;
      });
    patientService.getPatientList().subscribe(
      (res: Patient[]) => {
        this.patients = res;
      });
  }

  saveAppointment() {

  }

}
