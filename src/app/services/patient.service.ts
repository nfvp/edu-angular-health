import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from '../entities/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl: string = "http://localhost:8080/api/patients";  

  constructor(private httpClient: HttpClient) { }
  
  getPatientList() {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  getPatient(id) {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  createPatient(patient) {
    return this.httpClient.post(`${this.baseUrl}`, patient);
  }

  updatePatient(patient) {
    return this.httpClient.put(`${this.baseUrl}/${patient.id}`, patient);
  }

  deletePatient(id) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}