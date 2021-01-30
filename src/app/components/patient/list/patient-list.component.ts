import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../entities/patient';
import { PatientService } from '../../../services/patient.service';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {

    patients: Patient[] = [];

    constructor(service: PatientService) {
        service.getPatientList().subscribe(
            (res: Patient[]) => {
                this.patients = res;
            });
    }

}
