import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { Patient } from '../../entities/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {

  patientForm;


  constructor(private patientService: PatientService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    let patientId = route.snapshot.paramMap.get("id");

    patientService.getPatient(patientId).subscribe(
      (res: Patient) => {
        this.patientForm = this.formBuilder.group({
          id: [{ value: res.id, disabled: true }],
          name: res.name,
          gender: res.gender,
          birthdate: res.birthdate,
          citizenCard: res.citizenCard,
          fiscalNumber: res.fiscalNumber,
          phoneNumber: res.phoneNumber,
          address: res.address,
          socialSecurityNumber: res.socialSecurityNumber,
          insuranceNumber: res.insuranceNumber
        });
      });
  }

  savePatient(patient) {
    this.patientService.updatePatient(patient);
    this.router.navigateByUrl('/login');
  }

}