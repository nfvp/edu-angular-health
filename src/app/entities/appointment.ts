import { Doctor } from './doctor';
import { Patient } from './patient';

export class Appointment {
    id: number;
    startData: Date;
    endDate: Date;
    doctor: Doctor;
    patient: Patient;

    constructor() {
        this.doctor = new Doctor();
        this.patient = new Patient();
    }
}
