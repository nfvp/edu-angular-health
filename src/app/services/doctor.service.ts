import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Doctor } from '../entities/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl: string = "http://localhost:8080/api/doctors";  

  constructor(private httpClient: HttpClient) { }

  getDoctorList() {
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
  }

  getDoctor(id) {
    return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`);
  }

  createDoctor(doctor) {
    return this.httpClient.post(`${this.baseUrl}`, doctor);
  }

  updateDoctor(doctor) {
    return this.httpClient.put(`${this.baseUrl}/${doctor.id}`, doctor);
  }

  deleteDoctor(id) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}