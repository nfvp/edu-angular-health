import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Doctor } from '../entities/doctor';

@Injectable({ providedIn: 'root' })
export class DoctorService {

    private baseUrl: string = "http://localhost:8888/api/doctors";

    constructor(private httpClient: HttpClient) { }

    getDoctorList() {
        return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
    }

    getDoctor(id: string) {
        return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`);
    }

    createDoctor(doctor: Doctor) {
        return this.httpClient.post(`${this.baseUrl}`, doctor);
    }

    updateDoctor(doctor: Doctor) {
        return this.httpClient.put(`${this.baseUrl}/${doctor.id}`, doctor);
    }

    deleteDoctor(id: string) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}