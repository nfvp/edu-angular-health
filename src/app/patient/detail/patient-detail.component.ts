import { Component, OnInit } from '@angular/core';
import { Patient } from '../../entities/patient';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {

  id: string;
  patient: Patient;

  constructor(patientService: PatientService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");

    patientService.getPatient(this.id).subscribe(
      (res: Patient) => {
        this.patient = res;
      });
  }

  savePatient() {

  }

}
