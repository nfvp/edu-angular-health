import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from '../entities/patient';

@Injectable()
export class PatientService {

    private baseUrl: string = "http://localhost:8888/api/patients";

    constructor(private httpClient: HttpClient) { }

    getPatientList() {
        return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
    }

    getPatient(id: string) {
        return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
    }

    createPatient(patient: Patient) {
        return this.httpClient.post(`${this.baseUrl}`, patient);
    }

    updatePatient(patient: Patient) {
        return this.httpClient.put(`${this.baseUrl}/${patient.id}`, patient);
    }

    deletePatient(id: string) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}