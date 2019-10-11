import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Doctor } from '../entities/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl: string = "http://localhost:8080/doctors";  

  constructor(private httpClient: HttpClient) { }

  getDoctorList() {
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
  }

  getDoctor(id: string) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createDoctor(doctor: Doctor) {
    return this.httpClient.post(`${this.baseUrl}/doctors/`, doctor);
  }

  updateDoctor(doctor: Doctor) {
    return this.httpClient.put(`${this.baseUrl}/${doctor.id}`, doctor);
  }

  deleteDoctor(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}